document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));
        const image = button.getAttribute('data-image');
  
        // Kiểm tra nếu thiếu dữ liệu
        if (!name || isNaN(price) || !image) {
          alert('Dữ liệu sản phẩm không hợp lệ. Vui lòng kiểm tra lại.');
          return;
        }
  
        const product = { name, price, image };
  
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
        cart.push(product);
  
        localStorage.setItem('cart', JSON.stringify(cart));
  
        alert('✅ Đã thêm vào giỏ hàng!');
  
        // Nếu có phần hiển thị số lượng giỏ hàng:
        updateCartCount();
      });
    });
  
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const countEl = document.getElementById('cart-count');
      if (countEl) {
        countEl.innerText = cart.length;
      }
    }
  
    // Gọi khi trang vừa load để cập nhật số lượng hiển thị
    updateCartCount();
  });
  