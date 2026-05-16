# AloBiz Landing Page

Landing page cho alobiz.vn, tập trung vào hộ kinh doanh, hóa đơn điện tử, kê khai, báo cáo và dịch vụ hỗ trợ nhập liệu.

## Cách cập nhật lên GitHub

1. Copy các file này vào repo `alobiz-landingpage`.
2. Commit changes.
3. Vercel sẽ tự deploy.

## Kết nối Supabase

1. Vào Supabase SQL Editor.
2. Chạy file `supabase_landing_leads.sql`.
3. Vào Project Settings → API, copy:
   - Project URL
   - anon public key
4. Mở `script.js`, thay:
   - `DIEN_SUPABASE_URL_CUA_BAN`
   - `DIEN_SUPABASE_ANON_KEY_CUA_BAN`
5. Commit lại lên GitHub.

Form sẽ lưu dữ liệu vào bảng `landing_leads`.
