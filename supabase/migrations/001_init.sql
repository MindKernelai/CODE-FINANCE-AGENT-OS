-- Enums
create type public.role_type as enum ('OPERATOR', 'OWNER', 'FINANCE');
create type public.account_type as enum ('CASH', 'BANK', 'WALLET', 'PLATFORM');
create type public.txn_type as enum ('IN', 'OUT', 'TRANSFER', 'REFUND', 'ADVANCE');
create type public.approval_status as enum ('NONE', 'SUBMITTED', 'APPROVED', 'REJECTED');
create type public.payment_status as enum ('UNPAID', 'PAID', 'PAID_MANUAL');
create type public.reconcile_status as enum ('UNMATCHED', 'MATCHED', 'PARTIAL');
create type public.data_status as enum ('DIRTY', 'OK', 'CLEAN');
create type public.verified_status as enum ('NOT_VERIFIED', 'VERIFIED');

-- Workspaces
create table public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);

-- Users (profile)
create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  full_name text,
  created_at timestamptz not null default now()
);

create table public.members (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  role public.role_type not null,
  created_at timestamptz not null default now()
);

create table public.accounts (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  name text not null,
  type public.account_type not null,
  created_at timestamptz not null default now()
);

create table public.resp_wallets (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  name text not null,
  created_at timestamptz not null default now()
);

create table public.transactions (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  account_id uuid references public.accounts(id),
  resp_wallet_id uuid references public.resp_wallets(id),
  type public.txn_type not null,
  amount numeric not null,
  currency text default 'VND',
  memo text,
  category text,
  project text,
  approval_status public.approval_status not null default 'NONE',
  payment_status public.payment_status not null default 'UNPAID',
  reconcile_status public.reconcile_status not null default 'UNMATCHED',
  data_status public.data_status not null default 'DIRTY',
  is_locked boolean not null default false,
  txn_date date not null default current_date,
  created_at timestamptz not null default now()
);

create table public.attachments (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  transaction_id uuid not null references public.transactions(id) on delete cascade,
  file_url text not null,
  created_at timestamptz not null default now()
);

create table public.statement_lines (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  account_id uuid references public.accounts(id),
  txn_date date not null,
  amount numeric not null,
  memo text,
  matched_txn_id uuid references public.transactions(id),
  match_confidence numeric,
  created_at timestamptz not null default now()
);

create table public.months (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  month_key text not null,
  verified_status public.verified_status not null default 'NOT_VERIFIED',
  recon_pct numeric not null default 0,
  proof_pct numeric not null default 0,
  approval_pct numeric not null default 0,
  locked boolean not null default false,
  created_at timestamptz not null default now(),
  unique (workspace_id, month_key)
);

create table public.audit_events (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  actor_id uuid references public.users(id),
  action text not null,
  payload jsonb,
  created_at timestamptz not null default now()
);

create index on public.transactions (workspace_id, txn_date);
create index on public.statement_lines (workspace_id, txn_date);
