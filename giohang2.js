document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('total');

    function renderCart() {
        cartContainer.innerHTML = '';
        let sum = 0;

        cart.forEach((item, index) => {
            sum += item.price * (item.quantity || 1);

            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <img src="${item.image}" width="100">
                <h3>${item.name}</h3>
                <p>${(item.price * (item.quantity || 1)).toLocaleString()} đ</p>
                <div class="quantity">
                    <button class="decrease" data-index="${index}">-</button>
                    <span>${item.quantity || 1}</span>
                    <button class="increase" data-index="${index}">+</button>
                </div>
                <button class="remove-btn" data-index="${index}">Xóa</button>
            `;
            cartContainer.appendChild(itemDiv);
        });

        totalEl.innerText = `Tổng: ${sum.toLocaleString()} đ`;
        attachEvents();
    }

    function attachEvents() {
        // Xóa sản phẩm
        const removeButtons = cartContainer.querySelectorAll('.remove-btn');
        removeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'), 10);
                removeItem(idx);
            });
        });

        // Tăng số lượng
        const increaseButtons = cartContainer.querySelectorAll('.increase');
        increaseButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'), 10);
                cart[idx].quantity = (cart[idx].quantity || 1) + 1;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            });
        });

        // Giảm số lượng
        const decreaseButtons = cartContainer.querySelectorAll('.decrease');
        decreaseButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'), 10);
                if (cart[idx].quantity > 1) {
                    cart[idx].quantity -= 1;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCart();
                }
            });
        });
    }

    function removeItem(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    document.getElementById('clear-cart').addEventListener('click', () => {
        if (confirm('Bạn có chắc muốn xóa toàn bộ giỏ hàng không?')) {
            localStorage.removeItem('cart');
            cart = [];
            renderCart();
        }
    });

    // Thêm tính năng thanh toán
    document.querySelector('.thanh-toan').addEventListener('click', () => {
        if (confirm('Xác nhận thanh toán? Giỏ hàng sẽ bị xóa sau khi thanh toán.')) {
            localStorage.removeItem('cart');
            cart = [];
            renderCart();
            alert('Thanh toán thành công! Cảm ơn bạn đã mua sắm.');
        }
    });

    renderCart();
});
