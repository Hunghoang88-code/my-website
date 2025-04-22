document.addEventListener('DOMContentLoaded', () => {
    // Lấy giỏ hàng từ localStorage hoặc tạo mới nếu chưa có
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('total');
  
    // Hàm render lại toàn bộ giỏ hàng
    function renderCart() {
      cartContainer.innerHTML = '';      // Xóa nội dung cũ
      let sum = 0;
  
      cart.forEach((item, index) => {
        sum += item.price;
  
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
          <img src="${item.image}" width="100">
          <strong>${item.name}</strong> - ${item.price.toLocaleString()} đ
          <button class="remove-btn" data-index="${index}">Xóa</button>
          <hr>
        `;
        cartContainer.appendChild(itemDiv);
      });
  
      totalEl.innerText = `Tổng: ${sum.toLocaleString()} đ`;
      attachRemoveEvents();  // Gán lại sự kiện xóa cho các button mới tạo
    }
  
    // Gắn sự kiện click cho các nút Xóa
    function attachRemoveEvents() {
      const buttons = cartContainer.querySelectorAll('.remove-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          removeItem(idx);
        });
      });
    }
  
    // Xóa 1 món và render lại
    function removeItem(index) {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }
    
    
  
    // Lần đầu tiên khi load trang
    document.getElementById('clear-cart').addEventListener('click', () => {
      if (confirm('Bạn có chắc muốn xóa toàn bộ giỏ hàng không?')) {
        localStorage.removeItem('cart'); // Xóa dữ liệu
        cart = [];                       // Xóa mảng trong JS
        renderCart();                    // Render lại giao diện
      }
    });
    renderCart();
  });
  