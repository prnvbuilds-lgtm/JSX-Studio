export const GET_ACTIVE_CAMPAIGNS_QUERY = /* GraphQL */ `
  query GetActiveCampaigns($first: Int = 10) {
    campaigns(first: $first) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        databaseId
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        verticals {
          nodes {
            name
            slug
          }
        }
        campaignDetails {
          campaignType
          campaignStatus
          startDate
          endDate
          heroBadgeLabel
          ctaLabel
          ctaUrl
          partnerId
        }
      }
    }
  }
`;

export const GET_CAMPAIGN_BY_SLUG_QUERY = /* GraphQL */ `
  query GetCampaignBySlug($slug: ID!) {
    campaign(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      slug
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      verticals {
        nodes {
          name
          slug
        }
      }
      campaignDetails {
        campaignType
        campaignStatus
        startDate
        endDate
        heroBadgeLabel
        ctaLabel
        ctaUrl
        partnerId
      }
    }
  }
`;
