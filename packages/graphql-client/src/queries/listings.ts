export const GET_ALL_LISTINGS_QUERY = /* GraphQL */ `
  query GetAllListings($first: Int = 20, $after: String) {
    listings(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        id
        databaseId
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        verticals {
          nodes {
            id
            name
            slug
          }
        }
        locations {
          nodes {
            id
            name
            slug
          }
        }
        listingDetails {
          tagline
          priceTier
          rating
          reviewCount
          address
          city
          coordinates
          contactPhone
          contactEmail
          websiteUrl
          bookingUrl
          verificationStatus
          partnerId
        }
      }
    }
  }
`;

export const GET_LISTING_BY_SLUG_QUERY = /* GraphQL */ `
  query GetListingBySlug($slug: ID!) {
    listing(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      slug
      content
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      verticals {
        nodes {
          id
          name
          slug
        }
      }
      locations {
        nodes {
          id
          name
          slug
        }
      }
      listingDetails {
        tagline
        priceTier
        rating
        reviewCount
        address
        city
        coordinates
        contactPhone
        contactEmail
        websiteUrl
        bookingUrl
        verificationStatus
        partnerId
      }
    }
  }
`;

export const GET_LISTINGS_BY_VERTICAL_QUERY = /* GraphQL */ `
  query GetListingsByVertical($verticalSlug: [String]!, $first: Int = 20) {
    listings(
      first: $first
      where: {
        taxQuery: {
          taxArray: [
            {
              taxonomy: VERTICAL
              field: SLUG
              terms: $verticalSlug
            }
          ]
        }
      }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        databaseId
        title
        slug
        excerpt
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
        listingDetails {
          tagline
          priceTier
          rating
          city
          verificationStatus
        }
      }
    }
  }
`;
