const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.hide_mobile');
const projectCards = document.querySelector('.wrapper');
const contactContain = document.getElementById('contact');
const aboutContain = document.getElementById('aboutme');
const mainContain = document.getElementById('portfolio');
/* const popupContain = document.querySelectorAll('popup-window'); */
const homepageContain = document.getElementById('homepage');
// const recentworkContain = document.querySelector("recent-work");

const projectsArray = [
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit ',
    image: 'img/work1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    seeProject: 'See Project',
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit',
    image: 'img/work1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    seeProject: 'See Project',
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit',
    image: 'img/work1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    seeProject: 'See Project',
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit',
    image: 'img/work1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    seeProject: 'See Project',
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit',
    image: 'img/work1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    seeProject: 'See Project',
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
  {
    id: 6,
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit',
    image: 'img/work1.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'],
    seeProject: 'See Project',
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
];

function portfolioFunc() {
  let portfolioCode = '';

  projectsArray.forEach((singleProject) => {
    portfolioCode += `<section class="container3">

          <div>
            <img class="projectimg" alt="Project's webpage screenshot" src="${singleProject.image}" />
          </div>
          <div>
            <h2>
              ${singleProject.name}
              
            </h2>
          </div>

          <div class="btn-group">
            <ul id="btn1">
              <li><button class="ruby languages">${singleProject.technologies[0]}</button></li>
              <li><button class="languages">${singleProject.technologies[1]}</button></li>
              <li><button class="languages">${singleProject.technologies[2]}</button></li>
              <li><button class="languages">${singleProject.technologies[3]}</button></li>
            </ul>
          </div>
  

          <div class="divbtn-btn">
            <button id="project-${singleProject.id}" class="btn-btn see-project">${singleProject.seeProject}</button>
            
          </div>



        </section>`;
  });

  projectCards.innerHTML = portfolioCode;
}

portfolioFunc();

const popupBtns = document.querySelectorAll('.see-project');
const popupViews = document.querySelector('.popup-window');

function getPopupDetails(event) {
  const Ids = event.target.id;
  let temp = 0;

  switch (Ids) {
    case 1:
      temp = 0;
      break;

    case 2:
      temp = 1;
      break;

    case 3:
      temp = 2;
      break;

    case 4:
      temp = 3;
      break;

    case 5:
      temp = 4;
      break;

    case 6:
      temp = 5;
      break;

    default:
      break;
  }

  popupViews.classList.add('popup');

  popupViews.innerHTML = `       
           <button class="closepopup" onclick ="closePopup()">
               &times;
             </button>
               <img class="projectimg popupimg" alt="Project's webpage screenshot" src="${projectsArray[temp].image}" />
            
             <div>
               <h2 class ="project-title popup-project-title">
                 ${projectsArray[temp].name}
                
               </h2>
             </div>
  
             <div class="btn-group">
               <ul class="techno" id="btn1">
               <li><button class="ruby languages">${projectsArray[temp].technologies[0]}</button></li>
                <li><button class="languages">${projectsArray[temp].technologies[1]}</button></li>
                <li><button class="languages">${projectsArray[temp].technologies[2]}</button></li>
                <li><button class="languages only-desktop">${projectsArray[temp].technologies[3]}</button></li>
                <li><button class="languages only-desktop">${projectsArray[temp].technologies[4]}</button></li>
                <li><button class="languages only-desktop">${projectsArray[temp].technologies[5]}</button></li>
                <li><button class="languages only-desktop">${projectsArray[temp].technologies[6]}</button></li>
                <li><button class="languages only-desktop">${projectsArray[temp].technologies[7]}</button></li>
                <li><button class="languages only-desktop">${projectsArray[temp].technologies[8]}</button></li>
                

                
               </ul>
            </div>
  
            <div><p class ="project-description">${projectsArray[temp].description}</p></div>
    
  
             <div class="seelive-seesrc">
              <button class="btn-btn seelive">${projectsArray[temp].liveLink}&nbsp;<img alt="github" src="img/seelive.png" /> </button>
              <button class="btn-btn seesource">${projectsArray[temp].sourceLink}&nbsp; <a href="#"><img alt="github" src="img/seesource.png" /></a> </button>
              
             </div>`;

  body.style.overflow = 'hidden';
  mainContain.style.filter = 'blur(5px)';
  aboutContain.style.filter = 'blur(5px)';
  contactContain.style.filter = 'blur(5px)';
  homepageContain.style.filter = 'blur(5px)';
}

popupBtns.forEach((popupBtn) => {
  popupBtn.addEventListener('click', getPopupDetails);
});
/* eslint-disable */
function closePopup() {
  popupViews.classList.remove('popup');
  mainContain.style.filter = 'blur(0px)';
  aboutContain.style.filter = 'blur(0px)';
  contactContain.style.filter = 'blur(0px)';
  homepageContain.style.filter = 'blur(0px)';
  body.style.overflow = 'scroll';
}
/* eslint-enable */

function openMenu() {
  if (menu.classList.toggle('hamburger-toggle', true)) {
    close.classList.toggle('close-toggle');
    homepageContain.style.filter = 'blur(5px)';
    body.style.overflow = 'hidden';
  }
}

hamburger.addEventListener('click', openMenu);

function closeMenu() {
  menu.classList.remove('hamburger-toggle');
  close.classList.remove('close-toggle');
  hamburger.classList.toggle('hide_hamburger');
  homepageContain.style.filter = 'blur(0px)';
  body.style.overflow = 'auto';
}

close.addEventListener('click', closeMenu);

const navList = document.querySelectorAll('.mnitem');
for (let i = 0; i < navList.length; i += 1) {
  navList[i].addEventListener('click', closeMenu);
}

// form validation of lowercase email

const form = document.getElementById('formId');
const emailInput = document.getElementById('mail');
const errorMsg = document.getElementById('error');

function checkEmail() {
  const TrimmedEmail = emailInput.value.trim();

  if (TrimmedEmail !== TrimmedEmail.toLowerCase()) {
    errorMsg.innerText = 'Email Address must be Lowercase!';
    errorMsg.style.display = 'inline';
  } else {
    errorMsg.style.display = 'none';
    form.submit();
  }
}

form.addEventListener('submit', (eveent) => {
  eveent.preventDefault();
  checkEmail();
});
