// ===== BAT DAU CAU HINH FORM =====
// Cach 1: De trong neu chua cau hinh DB, form van hien thong bao thanh cong demo.
// Cach 2: Neu muon luu vao Supabase, dien SUPABASE_URL va SUPABASE_ANON_KEY ben duoi.
const SUPABASE_URL = '';
const SUPABASE_ANON_KEY = '';
const BANG_LEAD = 'landing_leads';
// ===== KET THUC CAU HINH FORM =====

// ===== BAT DAU HAM hienThongBao =====
function hienThongBao(noidung, loai = 'thanhcong') {
  const toast = document.getElementById('toast');
  toast.textContent = noidung;
  toast.className = `toast hien ${loai === 'loi' ? 'loi' : ''}`;
  window.clearTimeout(window.__alobizToastTimer);
  window.__alobizToastTimer = window.setTimeout(() => {
    toast.className = 'toast';
  }, 3200);
}
// ===== KET THUC HAM hienThongBao =====

// ===== BAT DAU HAM layDuLieuForm =====
function layDuLieuForm(form) {
  const data = new FormData(form);
  return {
    ten_cua_hang: (data.get('ten_cua_hang') || '').trim(),
    so_dien_thoai: (data.get('so_dien_thoai') || '').trim(),
    email: (data.get('email') || '').trim(),
    nganh_nghe: (data.get('nganh_nghe') || '').trim(),
    ghi_chu: (data.get('ghi_chu') || '').trim(),
    nguon: 'alobiz.vn',
  };
}
// ===== KET THUC HAM layDuLieuForm =====

// ===== BAT DAU HAM guiLeadSupabase =====
async function guiLeadSupabase(lead) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.info('Demo lead:', lead);
    return { demo: true };
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${BANG_LEAD}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify(lead),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || 'Không gửi được thông tin');
  }

  return { ok: true };
}
// ===== KET THUC HAM guiLeadSupabase =====

// ===== BAT DAU HAM khoiTaoLandingPage =====
function khoiTaoLandingPage() {
  document.getElementById('namHienTai').textContent = new Date().getFullYear();

  const form = document.getElementById('leadForm');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const button = form.querySelector('button[type="submit"]');
    const textCu = button.textContent;
    button.disabled = true;
    button.textContent = 'Đang gửi...';

    try {
      const lead = layDuLieuForm(form);
      await guiLeadSupabase(lead);
      hienThongBao('Đã ghi nhận thông tin. AloBiz sẽ liên hệ bạn khi bản trải nghiệm sẵn sàng.');
      form.reset();
    } catch (error) {
      console.error(error);
      hienThongBao('Gửi thông tin chưa thành công. Vui lòng thử lại sau.', 'loi');
    } finally {
      button.disabled = false;
      button.textContent = textCu;
    }
  });
}
// ===== KET THUC HAM khoiTaoLandingPage =====

khoiTaoLandingPage();
