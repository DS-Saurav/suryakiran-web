# Product Requirements Document: Suryakiran Renewable Energy — Corporate Website

**Document Version:** 1.0  
**Status:** Draft  
**Author:** Product Management & UX Team  

---

## 1. Project Overview & Objectives

### 1.1 Vision
To establish Suryakiran Renewable Energy as the preeminent, most trusted authority in Nepal's renewable energy sector through a digital presence that communicates stability, sophistication, and technical excellence.

### 1.2 Objectives
- **Authority Building:** Position the firm as Nepal's leading voice in solar, hydro, and sustainable energy infrastructure.
- **Trust Signal:** Convey solvency, longevity, and institutional credibility through every design and content decision.
- **Stakeholder Confidence:** Provide investors, government bodies, and commercial clients with the information required to initiate high-value partnerships.
- **Inquiry Generation:** Drive qualified contact form submissions and consultation requests.
- **SEO Foundation:** Achieve first-page organic ranking for key search terms (e.g., "renewable energy Nepal," "solar installation Kathmandu").

### 1.3 Success Metrics
- Page load time < 2.5 s (desktop) / < 4.0 s (mobile)
- Lighthouse Performance score ≥ 90
- Bounce rate < 45 %
- Contact form conversion rate ≥ 3 %
- Mobile traffic share ≥ 40 %

---

## 2. Target Audience

| Persona | Primary Need | Key Decision Criteria |
|---|---|---|
| **Institutional Investors** | Evaluate financial viability, regulatory standing, and project pipeline | Balance sheet strength, IRR projections, government clearances |
| **Government & Policy Partners** | Assess alignment with national energy targets and compliance | Regulatory history, EIA reports, local content policy adherence |
| **Commercial & Industrial Clients** | Secure reliable, cost-effective energy for operations | ROI timeline, maintenance SLAs, warranty terms |
| **Residential Customers** | Understand affordability and installation process | Upfront cost, subsidy eligibility, post-install support |
| **Talent & Academia** | Explore career opportunities and research collaboration | Company culture, project portfolio, innovation track record |

---

## 3. Site Architecture (Sitemap)

### 3.1 Bilingual Site Structure

Every page exists as a pair of language variants. The root `/` redirects to `/ne/` (Nepali default). All internal navigation is relative to the language prefix.

```
/                           → 301 redirect to /ne/
├── /ne/  (Nepali — default)
│   ├── Home         (/ne/)
│   ├── About Us     (/ne/about/)
│   ├── Services     (/ne/services/)
│   ├── Impact       (/ne/impact/)
│   ├── Contact      (/ne/contact/)
│   └── Legal        (/ne/legal/)
│
└── /en/  (English — via switcher)
    ├── Home         (/en/)
    ├── About Us     (/en/about/)
    ├── Services     (/en/services/)
    ├── Impact       (/en/impact/)
    ├── Contact      (/en/contact/)
    └── Legal        (/en/legal/)
```

### 3.2 Page-Level Hierarchy (per language)

```
Home (/ne/ or /en/)
├── Hero Section
├── Trust Bar (logos, certifications, stats)
├── Featured Projects (3-card grid)
├── Impact Counter (MW installed, tons CO₂ saved, jobs created)
├── Testimonial Carousel
└── CTA Strip (consultation booking)

About Us (/about)
├── Firm History & Heritage
├── Leadership Team (headshots + bios)
├── Mission, Vision, Values
├── Timeline Milestone
└── Certifications & Accreditations

Services & Projects (/services)
├── Solar PV (Utility-scale, Rooftop, Off-grid)
├── Micro-Hydro
├── Hybrid Systems
├── EPC & O&M
└── Case Study Library (per project: overview, tech spec, impact)

Sustainability Impact (/impact)
├── Environmental Metrics Dashboard (static infographic)
├── SDG Alignment (icons + narrative)
├── Community Engagement Stories
└── Annual Sustainability Report (downloadable PDF)

Contact (/contact)
├── Inquiry Form (name, email, org, message, project type dropdown)
├── Office Location Map (embedded)
├── Direct Contact Details (phone, email, address)
└── Social Links

Legal (/legal)
├── Privacy Policy
├── Terms of Service
└── Cookie Policy
```

### 3.3 Global Navigation Structure
```
[Logo]  |  Home  |  About  |  Services  |  Impact  |  Contact  |  [नेपाली | EN]  |  [CTA Button "Get in Touch"]
```

Footer sections: Quick Links, Services, Contact Info, Social Icons, © notice.

---

## 4. Functional Requirements

### 4.1 Static Site — Core Constraints
- **No CMS dependency:** All content authored in markup / JSON data files and compiled at build time.
- **No user login or authentication system.**
- **No e-commerce or payment processing.**

### 4.2 Performance
- Use an SSG framework (Astro or 11ty preferred for zero-JS-first output).
- Inline critical CSS; defer all non-critical JS.
- Serve next-gen image formats (WebP, AVIF) with responsive `<picture>` / `srcset`.
- Implement preload for hero image and above-the-fold assets.
- Enable gzip / Brotli compression at the CDN level.

### 4.3 SEO
- Unique `<title>` and `<meta name="description">` per page.
- Open Graph / Twitter Card meta tags.
- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Structured data (JSON-LD) for `Organization`, `LocalBusiness`, `Project`, `FAQ`.
- Auto-generated `sitemap.xml` and `robots.txt`.
- Clean, human-readable URL slugs (e.g., `/services/solar-pv`).

### 4.4 Mobile Responsiveness
- Mobile-first CSS with `min-width` breakpoints at 480 px, 768 px, 1024 px, 1440 px.
- Tap targets ≥ 48 × 48 px.
- No horizontal overflow on any viewport width.
- Accessible focus states and keyboard navigation.

### 4.5 Code Standards
- Validated HTML (W3C Nu Checker), no errors.
- Contrast ratio ≥ 4.5 : 1 for body text (WCAG AA).
- All images include descriptive `alt` attributes.
- CSS custom properties for all brand tokens (colors, spacing, typography).
- Progressive enhancement: core content readable with JS disabled.

---

## 5. Design Guidelines — "Old Money" Visual Language

### 5.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| Forest Green Deep | `#1B3A2D` | Primary — headings, navigation bar, buttons |
| Forest Green Mid | `#2E5A44` | Secondary — hover states, accent borders |
| Slate Gray Dark | `#2D3436` | Body text |
| Slate Gray Mid | `#636E72` | Secondary text, metadata |
| Slate Gray Light | `#DFE6E9` | Dividers, subtle borders |
| Ivory White | `#F8F6F1` | Page background, card backgrounds |
| Crisp White | `#FFFFFF` | Content areas, modals |
| Accent Gold | `#C5A55A` | Highlights, award badges, decorative rules |

### 5.2 Typography

| Role | Font Stack | Weight | Size (Desktop) | Line Height |
|---|---|---|---|---|
| Headings (H1–H3) | `"Playfair Display", Georgia, "Times New Roman", serif` | 600–700 | 2.5–4 rem | 1.15 |
| Subheadings (H4–H6) | `"Inter", "Helvetica Neue", Arial, sans-serif` | 600 | 1.125–1.5 rem | 1.3 |
| Body Text | `"Inter", "Helvetica Neue", Arial, sans-serif` | 400 | 1 rem / 1.125 rem | 1.6 |
| Navigation | `"Inter", sans-serif` | 500 | 0.9375 rem | 1 |
| Small / Caption | `"Inter", sans-serif` | 400 | 0.8125 rem | 1.4 |

### 5.3 Imagery Style
- **Photography:** Authentic, high-resolution, warm-toned. Subjects: Nepali landscapes, installation teams in the field, local communities. No stock-art clichés (glowing lightbulbs, handshakes).
- **Treatment:** Desaturated shadows, lifted blacks, subtle grain. Each image carries a 2 px inset dark gradient overlay at the bottom for text legibility.
- **Icons:** Line-art style, 1.5 px stroke, rounded caps. Use only for supporting functions (phone, email, chevron). No decorative icon sets.

### 5.4 Spacing & Layout

| Token | Value | Usage |
|---|---|---|
| Section padding (vertical) | 6–8 rem | Between major content blocks |
| Content max-width | 1280 px | Centered container, 2–4 rem side padding |
| Card padding | 2.5 rem | Interior card whitespace |
| Grid gutter | 2 rem | Between columns |
| Component gap (flex/grid) | 1.5 rem | Between related elements |

### 5.5 Atmosphere
- Generous whitespace throughout (the site should "breathe").
- Subtle box shadows on cards (`0 4 px 20 px rgba(45, 52, 54, 0.06)`).
- Smooth 300 ms ease-in-out transitions on hover states.
- Decorative horizontal rules (1 px, Slate Gray Light, 4 rem width, centered).
- No parallax, no carousel auto-rotation, no autoplay video.

---

## 6. Content Strategy

### 6.1 Hero Section (Home Page)
- **Language:** Defaults to Nepali on `/ne/`; English version on `/en/`.
- **Headline (EN):**  
  *"Powering Nepal's Future. Preserving Its Heritage."*
- **Headline (NE):**  
  *"नेपालको भविष्यलाई शक्ति दिँदै, यसको सम्पदा जोगाउँदै।"*
- **Subheadline (EN):**  
  *"Suryakiran Renewable Energy — delivering utility-scale solar, micro-hydro, and hybrid infrastructure across the Himalayas since 2008."*
- **Primary CTA:**  
  "Discuss Your Project" (links to `/{lang}/contact`)
- **Secondary CTA:**  
  "Explore Our Work" (links to `/{lang}/services`)
- **Background:** Full-viewport, high-resolution photograph of a solar installation against a Nepali mountain landscape, with a left-aligned dark gradient overlay.

### 6.2 Key Messaging Pillars

| Pillar | Core Message |
|---|---|
| **Heritage & Stability** | "Fifteen years of delivering energy infrastructure in Nepal's most challenging terrain." |
| **Local Expertise** | "Nepali-built, Nepali-operated. We understand the geography, the regulation, and the communities we serve." |
| **Technical Excellence** | "International-grade engineering adapted for Himalayan conditions." |
| **Sustainability** | "Every megawatt installed is a direct contribution to Nepal's SDG 7 and 13 commitments." |
| **Partnership** | "From government tenders to private off-grid projects — we deliver on time and on budget." |

### 6.3 Tone of Voice
- Formal but not bureaucratic; confident but not boastful.
- Use precise data points (e.g., "47.3 MW installed across 12 projects" rather than "hundreds of installations").
- Avoid superlative clutter ("leading," "best-in-class," "revolutionary").
- Acknowledge challenges candidly (terrain, logistics, monsoon seasons) to reinforce authenticity.

---

## 7. Technical Stack Recommendation

| Layer | Technology | Rationale |
|---|---|---|
| SSG Framework | Astro or 11ty | Zero JS by default, island architecture, excellent Markdown/MDX support, built-in i18n routing for `/ne/` and `/en/` |
| Styling | vanilla CSS + custom properties | No runtime, full control, smallest footprint |
| Hosting | Cloudflare Pages or Netlify | Global CDN, instant rollbacks, form handling |
| Domain DNS | Cloudflare | Free DNS, DDoS protection, SSL |
| Analytics | Plausible or Fathom (self-hosted) | Privacy-compliant, lightweight, no cookie banner required |

---

## 8. Performance Budget

| Asset | Budget |
|---|---|
| Total page weight | ≤ 500 KB (desktop) / ≤ 350 KB (mobile) |
| HTML | ≤ 30 KB |
| CSS | ≤ 20 KB (gzipped) |
| JS | ≤ 30 KB (gzipped, ideally 0 KB for content pages) |
| Fonts | ≤ 50 KB (subset + woff2) |
| Hero image | ≤ 100 KB (WebP, 1920 × 1080) |
| Time to First Contentful Paint | ≤ 1.5 s |
| Largest Contentful Paint | ≤ 2.5 s |
| Cumulative Layout Shift | ≤ 0.05 |

---

## 9. Out of Scope (v1.0)
- Blog / news section (deferred to v1.1)
- Client portal / project tracking dashboard
- Live chat widget
- Interactive ROI calculator

---

## 10. Addendum: Bilingual Functionality (Nepali Default, English Option)

### 10.1 Language Strategy
- **Primary Language:** The website loads in **Nepali** by default for all visitors, regardless of location. This reinforces local identity and serves the core Nepali audience (government, communities, local businesses).
- **Secondary Language:** Full English translation of all pages, accessible via a persistent language switcher.
- **Content Parity:** Every page, every section, every data point must exist in both languages with equal visual weight and editorial care — no AI translation; human-translated, culturally appropriate copy.

### 10.2 URL Structure & Routing
- The root path (`/`) will automatically redirect (HTTP 301 or server-side rewrite) to `/ne/`.
- All Nepali pages are located under the `/ne/` subdirectory; English under `/en/`.
- Example:
  - `/ne/` (Home in Nepali)
  - `/ne/about/`
  - `/en/` (Home in English)
  - `/en/about/`
- Clean URL slugs should be translated if meaningful, but to keep static generation simple and maintain parity, slugs may remain identical in English (transliterated where necessary) to avoid broken internal links during language switching. Use identical slugs: `/ne/about/` and `/en/about/` for structural simplicity, with page content translated. The page's `<html lang>` attribute and `<title>` will differ accordingly.

### 10.3 Language Switcher UI
- Positioned in the **top-right corner of the sticky navigation**, always visible.
- Styled as a subtle, two-option toggle: "नेपाली | EN".
- The current active language is indicated by an underline or slightly bolder weight, never a color inversion that disrupts the "Old Money" palette.
- Upon switching, the user is taken to the equivalent page in the selected language (if available). All internal links are relative to the language prefix.
- The switcher must work without JavaScript (via direct links to the other language's version of the page); JavaScript can enhance the experience but not required.

### 10.4 Technical Implementation (Static)
- The site will be built with a static site generator that supports i18n (e.g., Hugo's multilingual mode, 11ty with data files). Content is managed in separate language content files (markdown), one for each language.
- Build process generates two parallel site trees: `/ne/` and `/en/`. No runtime language detection; the redirect from `/` is handled at the CDN or edge level (e.g., via a simple HTML redirect file or Netlify `_redirects`).
- The user's language preference could be stored in a cookie if persistence is desired, but not required for MVP; the switcher alone ensures manual choice.
- SEO: Proper `hreflang` tags will indicate both language versions, preventing duplicate content issues and helping search engines serve the correct language. For Nepali, `hreflang="ne"`, for English `hreflang="en"`, with `x-default` pointing to `/ne/`.

### 10.5 Typography & Design Adjustments
- **Nepali Script:** The Devanagari typeface must pair harmoniously with the established serif/sans-serif hierarchy. Recommendation: **Mukta** or **Tiro Devanagari** for Nepali body text and navigation (clean, modern, highly legible at small sizes). For Nepali headings, a refined Devanagari serif like **Noto Serif Devanagari** or **Laila** can mirror the "Old Money" elegance of Cormorant Garamond.
- The overall whitespace and layout philosophy remains unchanged. Text expansion in Nepali (character count and line wrapping) must be tested; the grid and components should accommodate longer Nepali phrases without breaking.
- All images remain the same; any embedded text in images must be avoided — all text is live HTML to support translation.

### 10.6 Content Strategy Update
- The **Hero Section** (Home) defaults to Nepali copy conveying the same trust and permanence pillars. The English version must be a true translation, not a mere literal word-for-word. Both should be drafted by a bilingual copywriter.
- The **Sustainability Impact** numbers remain identical across languages; only accompanying explanations change.
- The **Contact Form** labels and options should be in Nepali by default, with English versions on the `/en/` pages. Form submission language tag (hidden field) should indicate which language the user submitted from, so the response can be in that language.

### 10.7 Revised Sitemap Note
The sitemap will reflect two logical clusters under a single domain. XML sitemaps will list all pages with proper language annotations. The site remains a 5-page brochure, but each "page" is effectively a pair of language variants.

---

## 11. Timeline & Milestones

| Phase | Deliverable | Estimated Duration |
|---|---|---|
| **Discovery** | Stakeholder interviews, content audit, competitive analysis | 2 weeks |
| **IA & Wireframing** | Sitemap finalization, low-fidelity wireframes for all pages | 1 week |
| **Design** | High-fidelity mockups (Figma), design system component library | 3 weeks |
| **Development** | Static site build, responsive QA, content population | 4 weeks |
| **Review & Launch** | Stakeholder review, performance audit, DNS cutover | 1 week |
| **Total** | | **11 weeks** |

---

*Document prepared by Product Management. All design and technical decisions are subject to stakeholder review and user testing validation.*
