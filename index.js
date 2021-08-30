const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.hide_mobile');

hamburger.addEventListener('click', openMenu);



function openMenu(event) {


    menu.style.display = "block";
    
    console.log(event.target);
}

