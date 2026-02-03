insert into public.workspaces (id, name)
values ('11111111-1111-1111-1111-111111111111', 'Demo Workspace');

insert into public.users (id, workspace_id, full_name)
values ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', 'Demo Owner');

insert into public.members (workspace_id, user_id, role)
values ('11111111-1111-1111-1111-111111111111', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'OWNER');

insert into public.accounts (workspace_id, name, type)
values
  ('11111111-1111-1111-1111-111111111111', 'MB Bank', 'BANK'),
  ('11111111-1111-1111-1111-111111111111', 'Ví vận hành', 'WALLET');

insert into public.resp_wallets (workspace_id, name)
values
  ('11111111-1111-1111-1111-111111111111', 'Ví vận hành'),
  ('11111111-1111-1111-1111-111111111111', 'Ví marketing');

insert into public.transactions (workspace_id, type, amount, memo, category, project, approval_status, payment_status, reconcile_status, data_status)
values
  ('11111111-1111-1111-1111-111111111111', 'OUT', 2000000, 'Chi quảng cáo', 'Marketing', 'Brand A', 'SUBMITTED', 'PAID', 'UNMATCHED', 'DIRTY'),
  ('11111111-1111-1111-1111-111111111111', 'IN', 7500000, 'Thu bán hàng', 'Bán hàng', 'Brand A', 'APPROVED', 'PAID', 'MATCHED', 'CLEAN');

insert into public.months (workspace_id, month_key, recon_pct, proof_pct, approval_pct, locked)
values ('11111111-1111-1111-1111-111111111111', '2024-07', 82, 60, 90, false);
