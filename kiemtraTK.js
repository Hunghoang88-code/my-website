function registerUser() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (!username || !email || !password || !confirmPassword) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Mật khẩu nhập lại không khớp. Vui lòng kiểm tra lại!");
    return false;
  }

  const user = { username, email, password };

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const exists = users.find(u => u.username === username);

  if (exists) {
    alert("Username đã tồn tại!");
    return false;
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Đăng ký thành công!");
  window.location.href = "index.html";
  return false;
}



function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const found = users.find(user => user.username === username && user.password === password);

  if (found) {
    alert("Đăng nhập thành công!");
    return true; // Cho phép submit để chuyển trang
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
    return false; // Ngăn submit
  }
}
