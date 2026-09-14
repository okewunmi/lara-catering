-- Lara Cake & Treats — Supabase schema
-- Run this in the Supabase SQL editor for a fresh project.

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  starting_price numeric,
  category text, -- e.g. "Cakes", "Small Chops", "Buffet"
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null, -- Cakes | Small Chops | Native Dishes | Drinks | Pastries | Events
  image_path text not null, -- path inside the "gallery" storage bucket
  caption text,
  sort_order int default 0,
  is_featured boolean default false,
  created_at timestamptz default now()
);

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  service text,
  event_date date,
  guest_count int,
  message text,
  status text default 'new', -- new | contacted | booked | closed
  created_at timestamptz default now()
);

create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  quote text not null,
  event_type text,
  is_approved boolean default false,
  created_at timestamptz default now()
);

-- Row Level Security: public can read approved/published content,
-- only authenticated (admin) users can write.
alter table services enable row level security;
alter table gallery_items enable row level security;
alter table leads enable row level security;
alter table testimonials enable row level security;

create policy "Public can read services" on services
  for select using (true);
create policy "Admins can manage services" on services
  for all using (auth.role() = 'authenticated');

create policy "Public can read gallery" on gallery_items
  for select using (true);
create policy "Admins can manage gallery" on gallery_items
  for all using (auth.role() = 'authenticated');

create policy "Anyone can submit a lead" on leads
  for insert with check (true);
create policy "Admins can read/manage leads" on leads
  for select using (auth.role() = 'authenticated');
create policy "Admins can update leads" on leads
  for update using (auth.role() = 'authenticated');

create policy "Public can read approved testimonials" on testimonials
  for select using (is_approved = true);
create policy "Admins can manage testimonials" on testimonials
  for all using (auth.role() = 'authenticated');

-- Storage bucket for gallery images (create via Supabase dashboard or SQL):
-- insert into storage.buckets (id, name, public) values ('gallery', 'gallery', true);
