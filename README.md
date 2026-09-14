# Lara Cake & Treats — Website

A Next.js catering website: public gallery + booking site with a WhatsApp
handoff, and a protected admin dashboard for managing gallery photos,
services, and leads.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Supabase (Postgres + Auth + Storage)
- react-hook-form + zod for the booking form

## Getting started

1. Install dependencies:
   ```
   npm install
   ```

2. Create a Supabase project at https://supabase.com, then:
   - Run `supabase/schema.sql` in the Supabase SQL editor to create the tables and RLS policies.
   - Create a public storage bucket named `gallery` (Storage → New bucket → Public).
   - Create an admin user under Authentication → Users (this is who logs into `/admin`).

3. Copy `.env.local.example` to `.env.local` and fill in your Supabase project URL and anon key (Project Settings → API).

4. Run the dev server:
   ```
   npm run dev
   ```
   Visit http://localhost:3000 for the public site and http://localhost:3000/admin/login for admin.

## What's already wired up
- **Public pages:** Home, Gallery (filterable), Services & pricing, About, Booking, Contact, FAQ
- **Booking → WhatsApp:** the booking form (`components/booking/booking-form.tsx`) builds a pre-filled `wa.me` link via `lib/whatsapp.ts` and also logs the lead to Supabase so nothing is lost
- **Admin (`/admin`):** protected by `middleware.ts` using Supabase Auth
  - Overview — quick stats
  - Gallery — upload photos to Supabase Storage, tag by category, delete
  - Leads — see every booking form submission, update status
  - Services — add/remove services and starting prices
- **SEO:** per-page metadata, Open Graph tags, `sitemap.ts`, `robots.ts`, and `LocalBusiness` JSON-LD in `app/layout.tsx`

## Still TODO before launch
- [ ] Replace the SVG images in `public/placeholder/` with real photos, or better — upload them through `/admin/gallery` and swap `lib/mock/data.ts` calls for real Supabase queries on the Gallery/Services/Home pages
- [ ] Replace `public/logo.svg` with the real logo file
- [ ] Set the real domain in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` (currently `laracakeandtreats.com` as a placeholder)
- [ ] Set up Google Business Profile with matching name/address/phone (see the project spec doc for the full marketing plan)
- [ ] Connect Google Analytics / Meta Pixel once the domain is live
- [ ] Deploy to Netlify or Vercel and add the environment variables there too

## Project structure
```
app/            → pages (App Router)
  admin/        → protected admin dashboard (route groups: (auth) login, (dashboard) the rest)
components/     → UI, layout, gallery, booking, admin components
lib/            → supabase clients, whatsapp helper, types, mock placeholder data
supabase/       → schema.sql to set up your database
middleware.ts   → protects /admin routes
```
