  const anhNen = [
      'anh_background1.webp',
      'anh_background2.webp',
      'slide-imgjpg.webp'
    ];  

    let chiSo = 0;

    function chuyenAnhNen() {
      const nen = document.getElementById('nen');
      nen.style.backgroundImage = `url(${anhNen[chiSo]})`;

      chiSo++;
      if (chiSo >= anhNen.length) {
        chiSo = 0;
      }
    }

    // gọi lần đầu để có ảnh đầu tiên
    chuyenAnhNen();

    // đổi ảnh sau mỗi 4 giây
    setInterval(chuyenAnhNen, 4000);

