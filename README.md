# Aurum Fragrances — Premium Luxury E-Commerce

A complete, modern, luxury e-commerce website for a premium perfume brand built with **Hono + TypeScript**, **PostgreSQL (Supabase)**, and **Stripe**, designed for deployment on **Cloudflare Pages**.

## Live Preview
- **GitHub**: https://github.com/hamzaka430/Aura_fragrences

## New Industry-Level Features

### 1. Database & Authentication (Supabase)
- **PostgreSQL Database**: Full relational database schema for users, products, orders, and order items.
- **Row-Level Security (RLS)**: Enforced security policies so users can only access their own orders and profiles.
- **Authentication**: JWT-based authentication using HTTP-only cookies. Complete login, signup, and logout flows.

### 2. Payments (Stripe)
- **Stripe Checkout**: Fully integrated Stripe checkout session for processing payments.
- **Webhook Integration**: Secure server-side endpoint (`/api/checkout/webhook`) that verifies Stripe signatures and creates orders in the database asynchronously.

### 3. Admin Dashboard
- **Role-Based Access**: Protected `/admin` routes accessible only to users with the `admin` role.
- **Management Console**: View live statistics (total sales, orders, products), manage products, and view recent orders directly from the database.

## Pages & Routes

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Full-screen hero, featured fragrances, bestsellers, stats, features, ingredients, testimonials, Instagram, newsletter |
| Shop | `/shop` | Product grid with gender/category filters, sorting |
| Product Detail | `/product/:slug` | Gallery, fragrance notes pyramid, volume selection, reviews, related products |
| Collections | `/collections` | Signature, Oud, Exclusive, Limited Edition collections with products |
| About | `/about` | Brand story, mission/vision, timeline, founder message, brand values |
| Journal (Blog) | `/blog` | Fragrance guides, perfume tips, luxury lifestyle articles |
| Contact | `/contact` | Contact form, info cards, embedded map |
| FAQ | `/faq` | Accordion FAQs with categories |
| Shopping Bag | `/cart` | Full cart page with order summary |
| Checkout | `/checkout` | Initiates Stripe Checkout session |
| Checkout Success| `/checkout/success` | Redirect page after successful payment |
| Sign In | `/login` | Supabase Auth login |
| Create Account | `/signup` | Supabase Auth registration form |
| My Account | `/account` | Profile and account management |
| Admin Dashboard| `/admin` | Store management console |
| API: Products | `/api/products` | JSON API for all products |

## Tech Stack
- **Framework**: Hono 4.x
- **Platform**: Cloudflare Pages
- **Database & Auth**: PostgreSQL (Supabase) + Supabase Auth
- **Payments**: Stripe
- **Build**: Vite
- **Styling**: Custom CSS with CSS Custom Properties

## Deployment & Setup Instructions

To deploy this project as a complete, deployment-ready system, follow these steps:

### 1. Database Setup (Supabase)
1. Create a new project on [Supabase](https://supabase.com).
2. Go to the SQL Editor in your Supabase dashboard.
3. Copy the contents of `supabase/schema.sql` and run it to create the necessary tables (`profiles`, `products`, `orders`, `order_items`) and RLS policies.
4. Obtain your **Project URL**, **anon key**, and **service_role key** from the Supabase API settings.

### 2. Stripe Setup
1. Create a [Stripe](https://stripe.com) account.
2. Obtain your **Secret Key** from the developers dashboard.
3. Setup a Stripe Webhook endpoint pointing to your deployed URL (e.g. `https://your-domain.com/api/checkout/webhook`) and select the `checkout.session.completed` event.
4. Obtain the **Webhook Secret**.

### 3. Environment Variables
For local development, create a `.env` file at the root of the project. For Cloudflare deployment, add these variables in your Cloudflare Pages dashboard:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NODE_ENV=production
```

### 4. Seed the Database
To populate your Supabase database with the initial luxury fragrances:
```bash
npm install -g tsx
tsx supabase/seed.ts
```

### 5. Local Development
```bash
npm install
npm run dev
# → http://localhost:5173
```

### 6. Cloudflare Pages Deployment
```bash
npm run deploy
# This will run `vite build` and `wrangler pages deploy`
```

## Admin Access
To access the Admin Dashboard at `/admin`, sign up as a regular user, then go to your Supabase Dashboard -> Authentication -> Users, and manually update the `role` column in the `profiles` table for your user account to `admin`.

## Project Structure
```
webapp/
├── src/
│   ├── index.tsx              # Main Hono app with all routes
│   ├── data.ts                # Fallback static data
│   ├── layout.ts              # Shared HTML layout template
│   ├── lib/
│   │   └── supabase.ts        # Supabase client setup
│   ├── services/              # Backend services
│   │   ├── admin.ts           # Admin dashboard routes
│   │   ├── auth.ts            # Authentication routes & middleware
│   │   ├── checkout.ts        # Stripe checkout & webhooks
│   │   └── products.ts        # Product DB fetchers
│   └── pages/                 # Page templates
│       ├── admin/             # Admin templates
│       ├── home.ts
│       ├── shop.ts
│       ├── product.ts
│       ├── cart.ts
│       └── auth.ts
├── public/static/
│   ├── style.css
│   └── app.js
├── supabase/
│   ├── schema.sql             # DB Schema & RLS policies
│   └── seed.ts                # Database seeder script
├── ecosystem.config.cjs
├── wrangler.jsonc
├── vite.config.ts
├── tsconfig.json
└── package.json
```