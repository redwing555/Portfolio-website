const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');



const menu = document.querySelector('.hide_mobile');



hamburger.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);



function openMenu() {

    if(menu.classList.toggle("hamburger-toggle",true)){

        
       
        hamburger.classList.toggle("hide_hamburger"); 
        close.classList.toggle("close-toggle");
        body.style.overflow = "hidden";

    }


    
    
}

function closeMenu() {

    menu.classList.remove("hamburger-toggle");
    close.classList.remove("close-toggle");
    hamburger.classList.toggle("hide_hamburger");
    body.style.overflow = "visible";

}

const navList = document.querySelectorAll('.mnitem');
for (let i = 0; i < navList.length; i++) {
    navList[i].addEventListener('click', closeMenu);
} 