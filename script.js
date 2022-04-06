'use strict';

let modal = document.querySelector('.modal');
let btnOpen = document.querySelectorAll('.show-modal');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.close-modal');
let newBtn = document.querySelector('.new-BTn');

for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('body').style.background = '#222';
  });
}

closeBtn.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.querySelector('body').style.background =
    'linear-gradient(to top left, #28b487, #7dd56f)';
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.querySelector('body').style.background =
    'linear-gradient(to top left, #28b487, #7dd56f)';
});

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape') {
    if (!modal.classList.contains('hidden')) {
      console.log(e.key);
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
      document.querySelector('body').style.background =
        'linear-gradient(to top left, #28b487, #7dd56f)';
    }
  }
});
