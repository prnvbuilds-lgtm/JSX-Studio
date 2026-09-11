# JXP-Studio

A headless WordPress + React platform for the hospitality and travel brand **JXP Guide** (&ldquo;Journaling Experiences&rdquo;).

---

## Architecture & Monorepo Structure

```
JXP-Studio/
├── apps/
│   ├── web/                    # Next.js 15 (App Router, TypeScript, Tailwind) — public marketing site
│   └── partner-hub/            # React + Vite SPA — Partner Hub dashboard (authenticated)
├── services/
│   └── api/                     # FastAPI backend (Python 3.12) — auth, analytics, messaging, billing stubs
├── packages/
│   ├── ui/                      # Shared luxury design-system component library (Button, Card, StatCard, Badge, etc.)
│   ├── config/                  # Shared ESLint, Prettier, and TypeScript configurations
│   └── graphql-client/          # Shared WPGraphQL client + typed models (Listing, Campaign, PartnerProfile, GuidePost)
├── wordpress/
│   ├── docker-compose.yml       # Local WP (PHP 8.2 Apache) + MySQL 8.0 + phpMyAdmin + FastAPI api
│   ├── uploads.ini              # PHP upload limit (128M) & memory (512M) configuration
│   ├── cpt-definitions.json     # Custom Post Type UI export (Listing, Campaign, PartnerProfile, GuidePost, Verticals)
│   ├── acf-fields.json          # ACF field groups export with GraphQL exposure
│   └── README.md                # Detailed WordPress headless setup & schema guide
├── images/                      # Stitch AI design exports & screen previews
├── .agents/                     # UI/UX engineering skills & design guidelines
├── docs/
│   └── Design.md                # Design tokens (colors, typography, spacing, component specs)
├── .env.example                 # Environment variables template
├── pnpm-workspace.yaml          # Monorepo workspace configuration
├── package.json                 # Root monorepo scripts (dev, build, typecheck, lint)
└── README.md
```

---

## 1. Quickstart & Running Locally

### Prerequisites
- Node.js 20+
- pnpm 10+ / npx pnpm
- Python 3.12+ (for FastAPI backend)
- Docker & Docker Compose (for local Headless WordPress & MySQL)

### Step 1: Environment Variables
```bash
cp .env.example .env
```

### Step 2: Start Headless WordPress & MySQL
```bash
docker compose -f wordpress/docker-compose.yml up -d
```
- **WordPress & WPGraphQL**: [http://localhost:8080](http://localhost:8080) (GraphQL endpoint at `http://localhost:8080/graphql`)
- **phpMyAdmin**: [http://localhost:8081](http://localhost:8081) (`root` / `jxp_root_password`)
- Follow [wordpress/README.md](wordpress/README.md) to import `cpt-definitions.json` and `acf-fields.json`.

### Step 3: Install Frontend Dependencies
```bash
npx pnpm install
```

### Step 4: Start Frontend Applications & API

You can run everything concurrently with a single command:
```bash
# Runs web (port 3000) + partner-hub (port 5173) + FastAPI API (port 8000)
npx pnpm dev
```

Or run individual services:
```bash
# Public Marketing Site (Next.js 15 App Router)
npx pnpm dev:web      # http://localhost:3000

# Partner Hub Dashboard (React + Vite SPA)
npx pnpm dev:hub      # http://localhost:5173

# FastAPI Backend Service
npx pnpm dev:api      # http://localhost:8000 (docs at /docs)
```

---

## 2. Applications & Packages

### `apps/web` (Public Marketing Site)
- **Framework**: Next.js 15, App Router, TypeScript, Tailwind CSS.
- **Routing Skeleton**:
  - `/` (Editorial Hero, Verticals Selector, Featured Curations, CTA banner)
  - `/living` (Living & Stays grid with SSG/ISR)
  - `/dining` (Dining & Gastronomy curations with SSG/ISR)
  - `/events` (Gatherings & Salons with SSG/ISR)
  - `/travel` (Expeditions & Itineraries with SSG/ISR)
  - `/community` (People & Purpose with SSG/ISR)
  - `/partner-with-jxp` (Full Partner Recruitment Landing Page directly generated from Stitch AI design)
  - `/about`, `/contact`
- **Data Layer**: `@jxp/graphql-client` with Incremental Static Regeneration (`revalidate = 60`).

### `apps/partner-hub` (Partner Dashboard SPA)
- **Framework**: React, Vite, TypeScript, Tailwind CSS.
- **Features**:
  - Auth-gated with mock JWT state and Login screen (`/login`).
  - Desktop fixed sidebar navigation (230px) and responsive mobile drawer.
  - Welcome hero with business branding (*The Coastal Table*).
  - 4-stat-card metrics row (Views, Engagements, Clicks, Rating).
  - Promo and status cards (*Featured on JXP*, *Your Listing is Live*).
  - Dedicated Partnership Manager card (*Jasmine Reed*).
  - 5 Quick Action tiles.
  - Editorial calendar and partner toolkit resources.
  - Skeletons for: Profile, Listings, Campaigns, Analytics, Messages, Resources, Billing, Settings.

### `services/api` (FastAPI Backend)
- **Framework**: FastAPI, Python 3.12, Pydantic, python-jose, passlib.
- **Routers**:
  - `/api/auth/login`: JWT token issuance
  - `/api/analytics/summary`: Metrics aggregation
  - `/api/messaging/threads`: Direct communications
  - `/api/billing/overview`: Membership and Stripe integration stub

### `packages/ui` (Shared Design System)
- Luxury dark theme adhering to `docs/Design.md` and `.agents/` UI/UX standards.
- Reusable components: `Button`, `Card`, `StatCard`, `Badge`, `NavItem`, `Sidebar`, `Modal`, `Input`.
- Shared Tailwind preset (`@jxp/ui/preset`) and design tokens (`@jxp/ui/tokens.css`).

### `packages/graphql-client` (WPGraphQL Shared Client)
- Strongly typed TypeScript content models (`Listing`, `Campaign`, `PartnerProfile`, `GuidePost`, `Vertical`, `Location`).
- Pre-built GraphQL queries for all site sections.
- Configurable fetcher with Next.js ISR tags and revalidation.

---

## 3. Design System & Stitch AI Alignment

- **Palette**: Deep Obsidian (`#0D0D0D`), Warm Charcoal (`#1A1A1A` / `#181818`), Crimson (`#B3231C`), Accent Gold (`#C9A66B`), Light Band (`#F5F1EA`).
- **Typography**: Playfair Display (Serif), Inter / Montserrat (Sans), Caveat / Dancing Script (Script Flourish).
- **House Rules**: Accessible semantics, compound component patterns, focus indicators, subtle hover lifts (`-translate-y-1`), and no hardcoded ad-hoc styles.
