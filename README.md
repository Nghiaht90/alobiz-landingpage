# AloBiz Landing Page

Landing page đơn giản cho alobiz.vn.

## Deploy Vercel

1. Upload toàn bộ file lên GitHub repo `alobiz-landingpage`
2. Vào Vercel → Add New → Project
3. Import repo
4. Framework Preset: Other
5. Bấm Deploy

## Cấu hình form lead với Supabase

Chạy SQL trong file `supabase_landing_leads.sql`, sau đó mở `script.js` và điền:

```js
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
```
