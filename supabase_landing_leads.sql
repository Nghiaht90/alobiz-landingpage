-- ===== BAT DAU SQL tao bang landing_leads =====
create table if not exists public.landing_leads (
  id bigint generated always as identity primary key,
  ten_cua_hang text not null,
  so_dien_thoai text not null,
  email text,
  nganh_nghe text,
  nhu_cau text,
  nguon text not null default 'alobiz.vn',
  trang_thai text not null default 'moi_dang_ky',
  ghi_chu text,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

create index if not exists idx_landing_leads_so_dien_thoai
on public.landing_leads using btree (so_dien_thoai);

create index if not exists idx_landing_leads_created_at
on public.landing_leads using btree (created_at desc);

alter table public.landing_leads enable row level security;

drop policy if exists "Cho phep khach tao lead" on public.landing_leads;
create policy "Cho phep khach tao lead"
on public.landing_leads
for insert
to anon
with check (true);

-- Khong tao policy SELECT cho anon de tranh lo danh sach khach hang.
-- ===== KET THUC SQL tao bang landing_leads =====
