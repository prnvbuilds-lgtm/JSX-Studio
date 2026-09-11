export const GET_GUIDE_POSTS_QUERY = /* GraphQL */ `
  query GetGuidePosts($first: Int = 12, $after: String) {
    guidePosts(first: $first, after: $after) {
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
        guideDetails {
          authorName
          readingTimeMinutes
          editorialBadge
          curatorNotes
        }
      }
    }
  }
`;

export const GET_GUIDE_POST_BY_SLUG_QUERY = /* GraphQL */ `
  query GetGuidePostBySlug($slug: ID!) {
    guidePost(id: $slug, idType: SLUG) {
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
        }
      }
      verticals {
        nodes {
          name
          slug
        }
      }
      locations {
        nodes {
          name
          slug
        }
      }
      guideDetails {
        authorName
        readingTimeMinutes
        editorialBadge
        curatorNotes
      }
    }
  }
`;
