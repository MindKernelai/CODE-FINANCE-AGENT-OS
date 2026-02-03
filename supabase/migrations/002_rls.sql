-- Helper functions
create or replace function public.is_member(workspace uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1 from public.members
    where workspace_id = workspace
      and user_id = auth.uid()
  );
$$;

create or replace function public.is_finance(workspace uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1 from public.members
    where workspace_id = workspace
      and user_id = auth.uid()
      and role in ('FINANCE', 'OWNER')
  );
$$;

alter table public.workspaces enable row level security;
alter table public.users enable row level security;
alter table public.members enable row level security;
alter table public.accounts enable row level security;
alter table public.resp_wallets enable row level security;
alter table public.transactions enable row level security;
alter table public.attachments enable row level security;
alter table public.statement_lines enable row level security;
alter table public.months enable row level security;
alter table public.audit_events enable row level security;

-- Workspaces
create policy "workspace read" on public.workspaces
  for select using (public.is_member(id));

-- Users
create policy "users self" on public.users
  for select using (id = auth.uid());

create policy "users insert" on public.users
  for insert with check (id = auth.uid());

-- Members
create policy "members read" on public.members
  for select using (public.is_member(workspace_id));

create policy "members manage" on public.members
  for insert with check (public.is_member(workspace_id));

-- Accounts
create policy "accounts read" on public.accounts
  for select using (public.is_member(workspace_id));

create policy "accounts write" on public.accounts
  for insert with check (public.is_member(workspace_id));

create policy "accounts update" on public.accounts
  for update using (public.is_member(workspace_id));

-- Resp wallets
create policy "wallets read" on public.resp_wallets
  for select using (public.is_member(workspace_id));

create policy "wallets write" on public.resp_wallets
  for insert with check (public.is_member(workspace_id));

create policy "wallets update" on public.resp_wallets
  for update using (public.is_member(workspace_id));

-- Transactions
create policy "transactions read" on public.transactions
  for select using (public.is_member(workspace_id));

create policy "transactions write" on public.transactions
  for insert with check (public.is_member(workspace_id));

create policy "transactions update" on public.transactions
  for update using (public.is_member(workspace_id) and is_locked = false);

-- Attachments
create policy "attachments read" on public.attachments
  for select using (public.is_member(workspace_id));

create policy "attachments write" on public.attachments
  for insert with check (public.is_member(workspace_id));

-- Statement lines (finance only)
create policy "statements read" on public.statement_lines
  for select using (public.is_finance(workspace_id));

create policy "statements write" on public.statement_lines
  for insert with check (public.is_finance(workspace_id));

create policy "statements update" on public.statement_lines
  for update using (public.is_finance(workspace_id));

-- Months
create policy "months read" on public.months
  for select using (public.is_member(workspace_id));

create policy "months update" on public.months
  for update using (public.is_member(workspace_id));

-- Audit events append-only
create policy "audit read" on public.audit_events
  for select using (public.is_member(workspace_id));

create policy "audit insert" on public.audit_events
  for insert with check (public.is_member(workspace_id));

revoke update on public.audit_events from authenticated;
revoke delete on public.audit_events from authenticated;
