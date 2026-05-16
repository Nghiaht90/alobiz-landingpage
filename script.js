// ===== BAT DAU CAU HINH SUPABASE =====
// Sau khi tạo project Supabase, thay 2 giá trị bên dưới.
const SUPABASE_URL = 'https://ivmiewdozlldkfgaoqjl.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_3sQmFYemtAvMvJVaB2eHJg_v2XBmqgu';
// ===== KET THUC CAU HINH SUPABASE =====

// ===== BAT DAU HAM khoiTaoFormLead =====
const form = document.getElementById('leadForm');
const formMessage = document.getElementById('formMessage');

function hienThongBao(noidung, loi = false) {
  formMessage.textContent = noidung;
  formMessage.style.color = loi ? '#DC2626' : '#5B21B6';
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const lead = {
  ten_cua_hang: data.get('ten_cua_hang')?.toString().trim(),
  so_dien_thoai: data.get('so_dien_thoai')?.toString().trim(),
  email: data.get('email')?.toString().trim() || null,
  nganh_nghe: data.get('nganh_nghe')?.toString().trim() || null,
  nhu_cau_quan_tam: data.get('nhu_cau')?.toString().trim() || 'ho_tro_nhap_lieu',
  nguon: 'landing_page',
  trang_thai: 'moi_dang_ky',
};

  if (!lead.ten_cua_hang || !lead.so_dien_thoai) {
    hienThongBao('Vui lòng nhập tên cửa hàng và số điện thoại.', true);
    return;
  }

  if (SUPABASE_URL.includes('DIEN_') || SUPABASE_ANON_KEY.includes('DIEN_')) {
    hienThongBao('Form đã sẵn sàng. Bạn cần điền SUPABASE_URL và SUPABASE_ANON_KEY trong script.js để lưu lead thật.', true);
    return;
  }

  try {
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { error } = await supabase.from('khach_hang_tiem_nang').insert([lead]);

    if (error) throw error;

    form.reset();
    hienThongBao('Đăng ký thành công. AloBiz sẽ liên hệ bạn sớm!');
  } catch (error) {
    console.error(error);
    hienThongBao('Chưa gửi được thông tin. Vui lòng thử lại hoặc liên hệ trực tiếp.', true);
  }
});
// ===== KET THUC HAM khoiTaoFormLead =====
