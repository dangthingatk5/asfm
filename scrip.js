'use strict';

const modal = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btncloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btncloseModal);
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    // khi click vào nút opnemoadal  lập tức remove đi  hai cái  lớp hidden để
    // hiển thị ra hộp hội thoại nhỏ và d đồng thời loowpa overlay cũng hiên ra
    // để ẩn đi backgroundc ủa boby
    modal.classList.remove('hidden'); //bao sao no khong chay remove('.hidden')vandeno nam o cho .hidden
    overlay.classList.remove('hidden'); //bao sao no khong chay remove('.hidden')vandeno nam o cho .hidden
  });
  btncloseModal.addEventListener('click', function () {
    modal.classList.add('hidden'); // sao no khong  chay nhỉ loi o dau
    overlay.classList.add('hidden');
  });
  // su kien keyup  anh key down khi mà bạn không muốc click ban nhấn nút esc
  document.addEventListener('keydown', function (e) {
    console.log('mot phim vua nhan');
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  });
}
