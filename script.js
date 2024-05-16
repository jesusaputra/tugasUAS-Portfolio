// Pagination  
let currentPage = 1;
  const totalPages = 3; 

  function showPage(pageNumber) {
      currentPage = pageNumber;
      // Sembunyikan semua halaman
      var pages = document.querySelectorAll('.page');
      pages.forEach(function(page) {
          page.style.display = 'none';
      });

      // Tampilkan halaman yang sesuai
      document.getElementById('page' + pageNumber).style.display = 'block';

      // Perbarui status pagination
      var pageItems = document.querySelectorAll('.page-item');
      pageItems.forEach(function(item) {
          item.classList.remove('active');
      });
      pageItems[pageNumber].classList.add('active');

      // Perbarui status tombol Previous dan Next
      updatePrevNextButtons();
  }

  function changePage(direction) {
      const newPage = currentPage + direction;
      if (newPage > 0 && newPage <= totalPages) {
          showPage(newPage);
      }
  }

  function updatePrevNextButtons() {
      document.getElementById('prev-btn').classList.toggle('disabled', currentPage === 1);
      document.getElementById('next-btn').classList.toggle('disabled', currentPage === totalPages);
  }

  // Inisialisasi halaman pertama dan status tombol
  showPage(currentPage);



// Button
// Menangani klik tombol Kirim
document.getElementById("btnKirim").addEventListener("click", function() {
    // Menampilkan pesan pop-up
    alert("Data anda telah dikirim");
  });