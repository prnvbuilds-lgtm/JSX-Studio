/**
 * Core WPGraphQL & WordPress Post Model Types for JXP Guide
 */

export type VerticalSlug = 'living' | 'dining' | 'events' | 'travel' | 'community';

export interface FeaturedImageNode {
  node: {
    sourceUrl: string;
    altText?: string;
    mediaDetails?: {
      width?: number;
      height?: number;
    };
  };
}

export interface TaxonomyTermNode {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface WPPageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
  endCursor?: string;
}

/**
 * Listing Model (Hospitality & Travel partner spots)
 */
export interface ListingDetailsACF {
  tagline?: string;
  priceTier?: '$' | '$$' | '$$$' | '$$$$';
  rating?: number;
  reviewCount?: number;
  address?: string;
  city?: string;
  coordinates?: string;
  contactPhone?: string;
  contactEmail?: string;
  websiteUrl?: string;
  bookingUrl?: string;
  verificationStatus?: 'verified' | 'featured' | 'pending';
  partnerId?: string;
}

export interface Listing {
  id: string;
  databaseId: number;
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  date: string;
  featuredImage?: FeaturedImageNode;
  verticals?: {
    nodes: TaxonomyTermNode[];
  };
  locations?: {
    nodes: TaxonomyTermNode[];
  };
  listingDetails?: ListingDetailsACF;
}

/**
 * Campaign Model (Promotional & Partner marketing campaigns)
 */
export interface CampaignDetailsACF {
  campaignType?: 'seasonal' | 'spotlight' | 'flash_deal' | 'sponsored_event';
  campaignStatus?: 'draft' | 'scheduled' | 'active' | 'completed';
  startDate?: string;
  endDate?: string;
  heroBadgeLabel?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  partnerId?: string;
}

export interface Campaign {
  id: string;
  databaseId: number;
  title: string;
  slug: string;
  content?: string;
  featuredImage?: FeaturedImageNode;
  verticals?: {
    nodes: TaxonomyTermNode[];
  };
  campaignDetails?: CampaignDetailsACF;
}

/**
 * Partner Profile Model (Brand profile & account details)
 */
export interface PartnerDetailsACF {
  companyName?: string;
  partnerTier?: 'standard' | 'premium' | 'founding_partner';
  contactName?: string;
  contactEmail?: string;
  isVerified?: boolean;
  headquarters?: string;
  memberSince?: string;
}

export interface PartnerProfile {
  id: string;
  databaseId: number;
  title: string;
  slug: string;
  content?: string;
  featuredImage?: FeaturedImageNode;
  partnerDetails?: PartnerDetailsACF;
}

/**
 * Guide Post Model (Editorial curation across verticals)
 */
export interface GuideDetailsACF {
  authorName?: string;
  readingTimeMinutes?: number;
  editorialBadge?: string;
  curatorNotes?: string;
}

export interface GuidePost {
  id: string;
  databaseId: number;
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  date: string;
  featuredImage?: FeaturedImageNode;
  verticals?: {
    nodes: TaxonomyTermNode[];
  };
  locations?: {
    nodes: TaxonomyTermNode[];
  };
  guideDetails?: GuideDetailsACF;
}

/**
 * GraphQL Connection Response Helpers
 */
export interface GraphQLConnection<T> {
  pageInfo: WPPageInfo;
  nodes: T[];
}

export interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
  }>;
}
