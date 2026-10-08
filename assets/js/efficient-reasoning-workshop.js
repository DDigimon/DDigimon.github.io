document.documentElement.classList.add('js');

const workshopMenu = document.getElementById('workshop-menu');
const workshopMenuToggle = document.querySelector('.menu-toggle');

function setWorkshopMenu(open) {
  workshopMenu.classList.toggle('is-open', open);
  workshopMenuToggle.setAttribute('aria-expanded', String(open));
}

workshopMenuToggle.addEventListener('click', function () {
  setWorkshopMenu(workshopMenuToggle.getAttribute('aria-expanded') !== 'true');
});

workshopMenu.addEventListener('click', function (event) {
  if (event.target.closest('a')) setWorkshopMenu(false);
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && workshopMenuToggle.getAttribute('aria-expanded') === 'true') {
    setWorkshopMenu(false);
    workshopMenuToggle.focus();
  }
});

document.addEventListener('click', function (event) {
  if (!event.target.closest('.workshop-nav')) setWorkshopMenu(false);
});
