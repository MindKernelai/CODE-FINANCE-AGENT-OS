# Supabase Setup

## 1) Create project
- Create a new Supabase project.
- Copy `Project URL` and `anon public` key.
- Set in `.env.local` using `ENV_EXAMPLE`.

## 2) Run migrations
Use Supabase SQL editor to run the migration files in order:
1. `supabase/migrations/001_init.sql`
2. `supabase/migrations/002_rls.sql`

## 3) (Optional) Seed data
Run `seed.sql` in SQL editor to insert demo data.

## 4) Edge Functions
Create the following Edge Functions and deploy:
- `ai-intake`
- `ai-cleaning`
- `ai-reconcile`
- `ai-export`

Upload corresponding code from `supabase/functions/*/index.ts`.

## 5) Storage
Create a bucket `receipts` for attachments.

## 6) Auth
Enable Email auth and configure redirect URLs for local dev: `http://localhost:3000`.

## 7) RLS reminders
- Statement lines are accessible only to FINANCE/OWNER roles.
- Audit events are append-only.

