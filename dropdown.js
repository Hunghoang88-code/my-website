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