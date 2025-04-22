// MỞ/ĐÓNG DROPDOWN MENU
const menuToggle = document.querySelector('#menuSanPham .menu-toggle');
const menu = document.getElementById('menuSanPham');

menuToggle.addEventListener('click', function (e) {
  e.stopPropagation(); // Không cho sự kiện lan ra ngoài
  menu.classList.toggle('open');
});

// Đóng dropdown khi click ra ngoài
document.addEventListener('click', function () {
  menu.classList.remove('open');
});

// TÌM KIẾM SẢN PHẨM + ẨN/HIỆN TIÊU ĐỀ <h1>
document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('.timkiem input');
  const danhSach = document.querySelectorAll('.ghe');
  const headers = document.querySelectorAll('#danhsachnoithat h1'); // lấy tất cả h1 trong danh sách sản phẩm

  input.addEventListener('input', function () {
    const tuKhoa = input.value.toLowerCase();
    let coKetQua = false;

    danhSach.forEach(function (sanPham) {
      const ten = sanPham.querySelector('h2').textContent.toLowerCase();
      const match = ten.includes(tuKhoa);
      sanPham.style.display = match ? "" : "none";
      if (match) coKetQua = true;
    });

    // Ẩn <h1> khi có từ khoá
    if (tuKhoa.length > 0) {
      headers.forEach(h => h.style.display = 'none');
    } else {
      headers.forEach(h => h.style.display = 'block');
    }
  });
});
