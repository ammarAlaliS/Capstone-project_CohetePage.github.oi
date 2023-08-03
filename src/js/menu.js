const hamburgerButtonImg = document.querySelector('.hamburgerButtonImg');
const closeIcon = document.querySelector('.fa-solid');
const links = document.querySelectorAll('.menuLinks');

function openMenu() {
  const menu = document.querySelector('.menuTwo');
  menu.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  const menu = document.querySelector('.menuTwo');
  menu.style.display = 'none';
  document.body.style.overflow = 'auto';
}

hamburgerButtonImg.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);

links.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
