  const popup = document.getElementById("imgPopup");
  const popupImg = document.getElementById("popupImage");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".clickable-img").forEach(img => {
    img.addEventListener("click", () => {
      popup.style.display = "block";
      popupImg.src = img.src;
    });
  });

  closeBtn.onclick = () => {
    popup.style.display = "none";
  };

  

