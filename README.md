# Finance Agent OS

Mobile-first finance ops app with AI-assisted intake, cleaning, reconciliation, and export. AI only drafts and suggests next steps; users confirm before committing.

## Tech stack
- Next.js 14 App Router + TypeScript strict
- TailwindCSS + shadcn/ui primitives
- Zustand for UI state
- React Hook Form + Zod validation
- Supabase (Postgres, Auth, Storage, Edge Functions)

## Run locally
```bash
cp ENV_EXAMPLE .env.local
npm install
npm run dev
```

## Supabase
See [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) for schema, RLS, and Edge Functions setup.

## Export mapping
Mapping is defined in `config/export-mapping.json`.

## Deterministic rules
- Transaction CLEAN only when approval_status != SUBMITTED, reconcile_status == MATCHED, receipt exists, and month is unlocked or unchanged.
- Verified Month only when recon/proof/approval coverage are 100% and month is locked.

## Scripts
- `npm run dev` start dev server
- `npm run build` build
- `npm run start` start production
