export const GET_PARTNER_PROFILES_QUERY = /* GraphQL */ `
  query GetPartnerProfiles($first: Int = 20) {
    partnerProfiles(first: $first) {
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
        partnerDetails {
          companyName
          partnerTier
          contactName
          contactEmail
          isVerified
          headquarters
          memberSince
        }
      }
    }
  }
`;

export const GET_PARTNER_PROFILE_BY_SLUG_QUERY = /* GraphQL */ `
  query GetPartnerProfileBySlug($slug: ID!) {
    partnerProfile(id: $slug, idType: SLUG) {
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
      partnerDetails {
        companyName
        partnerTier
        contactName
        contactEmail
        isVerified
        headquarters
        memberSince
      }
    }
  }
`;
