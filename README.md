# GigLink Africa

Marketplace MVP for event professionals.

## Stack
- Next.js
- TypeScript
- Supabase
- Vercel

## Run
1. Copy `.env.example` to `.env.local`.
2. Add your Supabase URL and publishable key.
3. Run `npm install` then `npm run dev`.

## Supabase
The database schema is in `supabase/schema.sql`.

## MVP flows
Discover → Compare → Request → Quote → Pay → Book → Complete → Review.

The current UI is the foundation. The next implementation step is connecting authentication, profiles, real professional records and booking creation to Supabase.
