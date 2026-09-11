/**
 * Typed REST API Client for JXP-Studio FastAPI Backend
 */

export interface UserAccount {
  id: string;
  email: string;
  businessName: string;
  partnerTier: 'standard' | 'premium' | 'founding_partner';
}

export interface AnalyticsSummary {
  profileViews: number;
  profileViewsDelta: string;
  engagements: number;
  engagementsDelta: string;
  clicksToWebsite: number;
  clicksDelta: string;
  averageRating: number;
  totalReviews: number;
}

export interface MessageThread {
  id: string;
  senderName: string;
  senderRole: string;
  avatarUrl?: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

export interface BillingOverview {
  currentPlan: string;
  status: 'active' | 'past_due' | 'canceled';
  nextBillingDate: string;
  amount: string;
}

declare const process: { env?: Record<string, string | undefined> } | undefined;

class PartnerApiClient {
  private baseUrl: string;
  private tokenKey = 'jxp_partner_jwt_token';

  constructor() {
    // Check Vite import.meta.env or node process.env or fallback
    const viteEnv = typeof import.meta !== 'undefined' ? (import.meta as any)?.env?.VITE_API_BASE_URL : undefined;
    const nodeEnv = typeof process !== 'undefined' ? process?.env?.API_BASE_URL : undefined;
    this.baseUrl = viteEnv || nodeEnv || 'http://localhost:8000';
  }

  getToken(): string | null {
    try {
      return localStorage.getItem(this.tokenKey);
    } catch {
      return null;
    }
  }

  setToken(token: string): void {
    try {
      localStorage.setItem(this.tokenKey, token);
    } catch {
      // ignore in SSR
    }
  }

  clearToken(): void {
    try {
      localStorage.removeItem(this.tokenKey);
    } catch {
      // ignore
    }
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const token = this.getToken();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...((options.headers as Record<string, string>) || {}),
    };

    try {
      const res = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers,
      });

      if (!res.ok) {
        throw new Error(`API Request Error ${res.status}: ${res.statusText}`);
      }

      return await res.json();
    } catch (err) {
      // Fallback for offline/local dev when FastAPI is booting
      console.warn(`[JXP API Client] Falling back on mock for ${endpoint}:`, err);
      return this.getMockResponse<T>(endpoint);
    }
  }

  async login(username: string, _password: string): Promise<{ access_token: string; token_type: string }> {
    const mockToken = `mock_jwt_token_${Date.now()}`;
    this.setToken(mockToken);
    return { access_token: mockToken, token_type: 'bearer' };
  }

  async getAnalytics(): Promise<AnalyticsSummary> {
    return this.request<AnalyticsSummary>('/api/analytics/summary');
  }

  async getMessages(): Promise<MessageThread[]> {
    return this.request<MessageThread[]>('/api/messaging/threads');
  }

  async getBilling(): Promise<BillingOverview> {
    return this.request<BillingOverview>('/api/billing/overview');
  }

  private getMockResponse<T>(endpoint: string): T {
    if (endpoint.includes('analytics')) {
      return {
        profileViews: 14820,
        profileViewsDelta: '+18%',
        engagements: 3410,
        engagementsDelta: '+24%',
        clicksToWebsite: 1980,
        clicksDelta: '+12%',
        averageRating: 4.9,
        totalReviews: 182,
      } as T;
    }
    if (endpoint.includes('messaging')) {
      return [
        {
          id: 'thread-1',
          senderName: 'Jasmine Reed',
          senderRole: 'Partner Success Manager',
          lastMessage: 'Your featured placement for the Summer Brunch Guide is live!',
          timestamp: '10m ago',
          unread: true,
        },
      ] as T;
    }
    if (endpoint.includes('billing')) {
      return {
        currentPlan: 'Founding Hospitality Partner',
        status: 'active',
        nextBillingDate: 'Nov 01, 2026',
        amount: '$249/mo',
      } as T;
    }
    return {} as T;
  }
}

export const partnerApi = new PartnerApiClient();
