# Aurum Fragrances — Premium Luxury E-Commerce

A complete, modern, luxury e-commerce website for a premium perfume brand built with **Hono + TypeScript** on **Cloudflare Pages**.

## Live Preview
- **Sandbox**: Running on port 3000
- **GitHub**: https://github.com/hamzaka430/Aura_fragrences

## Pages & Routes

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Full-screen hero, featured fragrances, bestsellers, stats, features, ingredients, testimonials, Instagram, newsletter |
| Shop | `/shop` | Product grid with gender/category filters, sorting |
| Product Detail | `/product/:slug` | Gallery, fragrance notes pyramid, volume selection, reviews, related products |
| Collections | `/collections` | Signature, Oud, Exclusive, Limited Edition collections with products |
| About | `/about` | Brand story, mission/vision, timeline, founder message, brand values |
| Journal (Blog) | `/blog` | Fragrance guides, perfume tips, luxury lifestyle articles |
| Blog Post | `/blog/:slug` | Full article with sharing |
| Contact | `/contact` | Contact form, info cards, embedded map |
| FAQ | `/faq` | Accordion FAQs with categories |
| Shopping Bag | `/cart` | Full cart page with order summary |
| Checkout | `/checkout` | Multi-step checkout with payment methods |
| Order Tracking | `/order-tracking` | Track orders by number |
| Sign In | `/login` | Login with social auth |
| Create Account | `/signup` | Registration form |
| My Account | `/account` | Profile, orders, settings |
| Wishlist | `/wishlist` | Saved fragrances |
| API: Products | `/api/products` | JSON API for all products |
| API: Product | `/api/products/:slug` | JSON API for single product |

## Features

### Completed
- 12 premium fragrance products with complete data
- Dark luxury theme (black, gold, white)
- Shopping cart with localStorage persistence
- Wishlist with localStorage persistence
- Product filtering by gender (Men/Women/Unisex)
- Product filtering by category (Oud/Fresh/Floral/Woody/Luxury)
- Product sorting (Price, Rating, Name)
- FAQ accordion
- Blog with category filtering
- Testimonials horizontal slider
- Newsletter signup forms
- Contact form
- Animated statistics counters
- Scroll-triggered fade animations
- Floating particle effects on hero
- Toast notifications
- Fully responsive (desktop, tablet, mobile)
- Premium typography (Playfair Display + Inter)

### Design System (from DESIGN-supabase.md)
- Typography hierarchy adapted from design tokens (display-xxl through micro)
- Spacing system: 4/8/12/16/24/32/48/64/96px scale
- Border radius: 4/6/8/12/16px scale
- Elevation levels with box-shadows
- Component patterns: cards, buttons, inputs, pills, navigation

## Tech Stack
- **Framework**: Hono 4.x
- **Platform**: Cloudflare Pages
- **Build**: Vite
- **Styling**: Custom CSS with CSS Custom Properties (design tokens)
- **Typography**: Google Fonts (Inter + Playfair Display)
- **Icons**: Font Awesome 6.5
- **Process Manager**: PM2

## Data Architecture
- **Products**: 12 fragrances with name, slug, price, rating, reviews, categories, gender, fragrance notes (top/heart/base), volumes, badges, collections
- **Cart/Wishlist**: localStorage (client-side persistence)
- **No backend database** — static product data served via Hono routes

## Deployment

### Local Development
```bash
npm run build
pm2 start ecosystem.config.cjs
# → http://localhost:3000
```

### Cloudflare Pages
```bash
npm run build
npx wrangler pages deploy dist --project-name aurum-fragrances
```

## Project Structure
```
webapp/
├── src/
│   ├── index.tsx        # Main Hono app with all routes
│   ├── data.ts          # Product & content data
│   ├── layout.ts        # Shared HTML layout template
│   └── pages/           # Page templates
│       ├── home.ts      # Home page with hero, features, etc.
│       ├── shop.ts      # Shop page with filters
│       ├── product.ts   # Product detail page
│       ├── about.ts     # About page
│       ├── collections.ts
│       ├── blog.ts      # Blog list + article pages
│       ├── contact.ts
│       ├── faq.ts
│       ├── cart.ts      # Cart, checkout, order tracking
│       ├── auth.ts      # Login, signup, account
│       └── wishlist.ts
├── public/static/
│   ├── style.css        # Complete luxury CSS (~57KB)
│   └── app.js           # Frontend interactions (~19KB)
├── ecosystem.config.cjs
├── wrangler.jsonc
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Last Updated
June 16, 2026
