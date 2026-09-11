# JXP Guide — Headless WordPress Dev Environment

This folder contains the complete local Docker development stack and content model definitions for **JXP Guide** headless WordPress CMS.

---

## 1. Quick Start

### Start the Stack
From this directory (`wordpress/`) or the project root:

```bash
# Start MySQL, WordPress (PHP 8.2), and phpMyAdmin
docker compose -f wordpress/docker-compose.yml up -d
```

### Services & Endpoints
| Service | URL | Default Credentials |
| :--- | :--- | :--- |
| **WordPress Web & API** | [http://localhost:8080](http://localhost:8080) | Setup on first visit |
| **WPGraphQL Endpoint** | [http://localhost:8080/graphql](http://localhost:8080/graphql) | Public queries enabled |
| **phpMyAdmin** | [http://localhost:8081](http://localhost:8081) | User: `root` / Pass: `jxp_root_password` |
| **MySQL 8.0** | `localhost:3306` | DB: `jxp_wordpress` / User: `jxp_user` / Pass: `jxp_secure_password` |

---

## 2. Required Plugins Installation

Once WordPress is running, log in to `http://localhost:8080/wp-admin` and install/activate these plugins:

1. **WPGraphQL** (`wp-graphql`)
   - Provides the GraphQL API schema at `/graphql`.
2. **Advanced Custom Fields (ACF)** (`advanced-custom-fields` or ACF Pro)
   - Powers all structured fields for listings, campaigns, partner profiles, and editorial guides.
3. **WPGraphQL for ACF** (`wpgraphql-acf`)
   - Exposes ACF fields directly into the GraphQL schema under custom field namespaces.
4. **Custom Post Type UI (CPT UI)** (`custom-post-type-ui`)
   - Used to register JXP Custom Post Types with GraphQL visibility enabled.
5. **WPGraphQL JWT Authentication** (`wp-graphql-jwt-authentication`)
   - Enables JWT issuance for partner logins and authenticated API requests.

---

## 3. Importing Custom Post Types & Taxonomies

We have pre-configured all post types and taxonomies in [`cpt-definitions.json`](./cpt-definitions.json).

### Steps to Import:
1. In WP Admin, navigate to **CPT UI** → **Tools** → **Import/Export Post Types**.
2. Open [`cpt-definitions.json`](./cpt-definitions.json) and copy the JSON inside `"cptui_post_types"`.
3. Paste into the **Import Post Types** box and click **Import**.
4. Repeat for `"cptui_taxonomies"` under **Import/Export Taxonomies**.

### Registered Custom Post Types:
- **`listing`** (GraphQL Single: `listing`, Plural: `listings`):
  Hospitality & travel partner spots, hotels, dining, retreats, experiences.
- **`campaign`** (GraphQL Single: `campaign`, Plural: `campaigns`):
  Partner marketing, seasonal highlights, promotional banners, flash perks.
- **`partner_profile`** (GraphQL Single: `partnerProfile`, Plural: `partnerProfiles`):
  Partner brand details, tier status, contact, verification.
- **`guide_post`** (GraphQL Single: `guidePost`, Plural: `guidePosts`):
  Curated travel editorial articles across Living, Dining, Events, Travel, Community.

### Registered Taxonomies:
- **`vertical`** (`verticals` in GraphQL):
  Content verticals: `living`, `dining`, `events`, `travel`, `community`.
- **`location`** (`locations` in GraphQL):
  Destinations, regions, cities.

---

## 4. Importing Custom Fields (ACF)

We have pre-configured the field schemas in [`acf-fields.json`](./acf-fields.json).

### Steps to Import:
1. In WP Admin, navigate to **Custom Fields** (ACF) → **Tools** → **Import Field Groups**.
2. Select [`wordpress/acf-fields.json`](./acf-fields.json) and click **Import JSON**.
3. All four field groups will be registered:
   - `listingDetails` → attached to `listing`
   - `campaignDetails` → attached to `campaign`
   - `partnerDetails` → attached to `partner_profile`
   - `guideDetails` → attached to `guide_post`

---

## 5. Verifying the GraphQL Schema

Once plugins and fields are imported, test the GraphQL API:

```bash
curl -X POST http://localhost:8080/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ listings { nodes { id title slug listingDetails { priceTier rating city } } } }"}'
```

Or open the **GraphQL IDE** inside WordPress admin to explore the interactive documentation schema!

---

## 6. Ready for Stitch AI MCP Frontend Generation

With the WordPress schema defined, you are now ready to:
1. Connect your **Stitch AI MCP server**.
2. Point Stitch AI components to the typed models and queries in [`packages/graphql-client`](../packages/graphql-client).
3. Generate the Next.js 15 marketing site (`apps/web`) and Partner Hub dashboard (`apps/partner-hub`) with live schema alignment.
