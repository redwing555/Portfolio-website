const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

const menu = document.querySelector('.hide_mobile');

function openMenu() {
  if (menu.classList.toggle('hamburger-toggle', true)) {
    hamburger.classList.toggle('hide_hamburger');
    close.classList.toggle('close-toggle');
    body.style.overflow = 'hidden';
  }
}

hamburger.addEventListener('click', openMenu);

function closeMenu() {
  menu.classList.remove('hamburger-toggle');
  close.classList.remove('close-toggle');
  hamburger.classList.toggle('hide_hamburger');
  body.style.overflow = 'visible';
}

close.addEventListener('click', closeMenu);

const navList = document.querySelectorAll('.mnitem');
for (let i = 0; i < navList.length; i += 1) {
  navList[i].addEventListener('click', closeMenu);
}