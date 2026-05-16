-- ===== BAT DAU SQL tao bang landing_leads =====
create table if not exists public.landing_leads (
  id bigint generated always as identity primary key,
  ten_cua_hang text not null,
  so_dien_thoai text not null,
  email text,
  nganh_nghe text,
  ghi_chu text,
  nguon text default 'alobiz.vn',
  trang_thai text not null default 'moi_dang_ky',
  ngay_tao timestamp with time zone not null default now()
);
-- ===== KET THUC SQL tao bang landing_leads =====

-- ===== BAT DAU SQL bat RLS =====
alter table public.landing_leads enable row level security;
-- ===== KET THUC SQL bat RLS =====

-- ===== BAT DAU SQL policy cho phep insert lead tu landing page =====
drop policy if exists "landing_leads_insert_public" on public.landing_leads;
create policy "landing_leads_insert_public"
on public.landing_leads
for insert
to anon
with check (true);
-- ===== KET THUC SQL policy cho phep insert lead tu landing page =====

-- ===== BAT DAU SQL index =====
create index if not exists idx_landing_leads_ngay_tao on public.landing_leads (ngay_tao desc);
create index if not exists idx_landing_leads_sdt on public.landing_leads (so_dien_thoai);
-- ===== KET THUC SQL index =====
