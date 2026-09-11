import { GraphQLResponse } from './types/content-models';

export interface GraphQLClientOptions {
  endpoint?: string;
  authToken?: string;
  headers?: Record<string, string>;
  revalidate?: number | false;
  tags?: string[];
}

declare const process: { env?: Record<string, string | undefined> } | undefined;

export class WPGraphQLClient {
  private endpoint: string;
  private defaultHeaders: Record<string, string>;
  private defaultRevalidate: number | false;
  private defaultTags: string[];

  constructor(options: GraphQLClientOptions = {}) {
    this.endpoint =
      options.endpoint ||
      (typeof process !== 'undefined' && process?.env?.WPGRAPHQL_ENDPOINT) ||
      'http://localhost:8080/graphql';

    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(options.authToken ? { Authorization: `Bearer ${options.authToken}` } : {}),
      ...(options.headers || {}),
    };

    this.defaultRevalidate = options.revalidate !== undefined ? options.revalidate : 60; // 60s ISR by default
    this.defaultTags = options.tags || ['wordpress'];
  }

  /**
   * Execute a GraphQL Query or Mutation against WPGraphQL
   */
  async request<T>(
    query: string,
    variables: Record<string, unknown> = {},
    customOptions: {
      revalidate?: number | false;
      tags?: string[];
      authToken?: string;
    } = {}
  ): Promise<T> {
    const headers = { ...this.defaultHeaders };
    if (customOptions.authToken) {
      headers['Authorization'] = `Bearer ${customOptions.authToken}`;
    }

    const revalidate =
      customOptions.revalidate !== undefined ? customOptions.revalidate : this.defaultRevalidate;
    const tags = customOptions.tags || this.defaultTags;

    // Build fetch init options supporting Next.js ISR (when available)
    const fetchInit: RequestInit & { next?: { revalidate?: number | false; tags?: string[] } } = {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    };

    if (revalidate !== false) {
      fetchInit.next = {
        revalidate,
        tags,
      };
    }

    const res = await fetch(this.endpoint, fetchInit);

    if (!res.ok) {
      const errorText = await res.text().catch(() => 'Unknown network error');
      throw new Error(`[WPGraphQL Error ${res.status}] ${res.statusText}: ${errorText}`);
    }

    const json: GraphQLResponse<T> = await res.json();

    if (json.errors && json.errors.length > 0) {
      const messages = json.errors.map((e) => e.message).join(' | ');
      throw new Error(`[WPGraphQL Schema Error] ${messages}`);
    }

    if (!json.data) {
      throw new Error('[WPGraphQL Error] No data returned in GraphQL response');
    }

    return json.data;
  }
}

// Default singleton instance using environment endpoint
export const wpClient = new WPGraphQLClient();
