# Design.md — JXP Guide Design System

Reference spec for building/styling the JXP Guide platform (public site + Partner Hub dashboard). Use this alongside the Stitch AI prompt and reference screenshots.

---

## 1. Brand Identity

- **Name**: JXP Guide — "Journaling Experiences"
- **Positioning**: Boutique, editorial-style travel & hospitality brand — not a generic SaaS product. Feels premium, warm, human.
- **Taglines**:
  - "Comfort. Fun. Spontaneity. Purpose."
  - "Different Places. A Fuller You."
  - "Experiences for a Better You."
- **Logo**: Circular ornate medallion, red-and-black, filigree border, "JXP" monogram center. Used as favicon, nav mark, and large centerpiece graphic.

---

## 2. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg-primary` | `#0D0D0D` | Base page background (dark mode) |
| `--color-bg-surface` | `#1A1A1A` | Card / panel backgrounds |
| `--color-bg-surface-alt` | `#1F1F1F` | Secondary card / hover state |
| `--color-bg-light` | `#F5F1EA` | Contrast band sections (e.g. "Why Partner" section) |
| `--color-accent-primary` | `#B3231C` | Primary red — CTAs, active states, key numbers |
| `--color-accent-primary-hover` | `#8F1C16` | Button hover state |
| `--color-accent-gold` | `#C9A66B` | Script accents, decorative underlines |
| `--color-text-primary` | `#FFFFFF` | Headlines, primary text on dark bg |
| `--color-text-secondary` | `#B3B3B3` | Body copy, secondary labels on dark bg |
| `--color-text-on-light` | `#1A1A1A` | Text on light-background sections |
| `--color-success` | `#4CAF50` | Positive stat indicators (+24% etc.) |
| `--color-border` | `#2A2A2A` | Card borders, dividers on dark bg |

---

## 3. Typography

| Role | Font family | Weight | Size (desktop) | Notes |
|---|---|---|---|---|
| Display / Hero headline | Serif (Playfair Display or equivalent) | 600–700 | 40–56px | "Welcome Back, The Coastal Table" |
| Section headline | Serif | 600 | 28–36px | Section titles |
| Script accent | Cursive/script (e.g. Alex Brush, Caveat) | 400 | 18–28px | "Good Food, Great People, Bigger Experiences" |
| Nav / UI labels | Sans-serif (Inter or Helvetica Neue) | 500–600 | 13–14px, uppercase, letter-spaced | Nav items, button labels |
| Body copy | Sans-serif | 400 | 15–16px | Descriptions, paragraphs |
| Stat numbers | Sans-serif | 700 | 28–32px | Dashboard stat cards |
| Small label / eyebrow | Sans-serif | 600 | 11–12px, uppercase, letter-spaced 0.08em | "WELCOME BACK,", "WHY PARTNER WITH JXP?" |

---

## 4. Spacing & Grid

- **Base unit**: 8px
- **Container max-width**: 1440px (desktop), centered with 24–32px side gutters
- **Card padding**: 24px (default), 32px (hero/feature cards)
- **Card border-radius**: 12px (default), 16px (hero banners, large feature cards)
- **Section vertical spacing**: 64–96px between major sections
- **Grid**: 12-column, 24px gutter, for public site; 4-stat-card row uses equal-width flex/grid with 16–20px gaps

---

## 5. Components

### Buttons
- **Primary**: Pill-shaped (border-radius: 999px), solid `--color-accent-primary` fill, white uppercase text, 14px bold, right-facing arrow icon, ~14px vertical / 28px horizontal padding
- **Secondary/outline**: Same pill shape, transparent fill, 1px white/light border, white text
- **Hover**: Darken fill by ~15%, slight scale (1.02) or subtle shadow lift

### Cards
- Dark surface (`--color-bg-surface`), 1px `--color-border`, 12–16px radius
- Photo cards: full-bleed image, dark gradient overlay (bottom-to-top, black 70%→0%) for text legibility
- Stat cards: icon top-left, large number, label below, small green delta indicator with up-arrow

### Navigation
- **Sidebar (dashboard)**: 220px fixed width, dark bg, icon + label rows, active item highlighted with red left-border accent + red icon/text
- **Top nav (public site)**: logo left, centered links, CTA button right, transparent-over-hero / solid-on-scroll

### Icons
- Style: outline/line icons, 1.5px stroke weight, 20–24px size
- Consistent icon set across nav, stat cards, and quick-action tiles (e.g., Lucide or Feather icon set as a stand-in)

### Forms
- Dark input fields on dashboard/contact form: `--color-bg-surface-alt` background, 1px border, 8px radius, white text, light-grey placeholder
- Labels: small uppercase sans-serif above each field

### Status indicators
- Live/active dot: small filled green circle + label ("Your Listing is Live")
- Notification badge: small red circle with count, top-right of bell/message icons

---

## 6. Imagery Guidelines

- Warm, golden-hour and sunset lighting
- Upscale restaurant interiors, skyline views, coastal/resort scenes
- Candid lifestyle photography — diverse people dining, traveling, and connecting together
- Avoid stock-photo stiffness; favor natural, editorial-style compositions
- Apply consistent warm color grading (slightly boosted oranges/reds) across all photography for brand cohesion

---

## 7. Page Inventory

| Page/Screen | Type | Key sections |
|---|---|---|
| Partner Hub Dashboard | Authenticated app | Sidebar nav, welcome hero, stat cards, featured/listing cards, partnership manager, quick actions, opportunities, resources, CTA footer |
| Partner Marketing Landing Page | Public marketing | Hero, why-partner grid, partner opportunities gallery, testimonial, reach stats + contact form, footer |
| Brand/Promo Collage | Shareable graphic (not a live page) | Photo collage, center emblem, category icon row, QR code, social CTA |
| Living / Dining / Events / Travel / Community | Public content (implied by nav) | Editorial listing/guide pages — structure not shown in references, follow same card/typography system |

---

## 8. Responsive Notes

- Dashboard: sidebar collapses to icon-only or hamburger drawer under 1024px
- Stat card row: 4-across desktop → 2x2 grid tablet → stacked mobile
- Public hero: 2-column → stacked (image below text) under 768px
- Partner Opportunities gallery: horizontal scroll on mobile instead of wrapping grid
