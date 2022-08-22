let lists = document.querySelectorAll('.show-modal');
lists.forEach(el => {
  el.addEventListener('click', show);
});
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
function show() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      hide();
    }
  });

  document.querySelector('.close-modal').addEventListener('click', hide);
  overlay.addEventListener('click', hide);

  function hide() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
}
