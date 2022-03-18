const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.hide_mobile');
const contactContain = document.getElementById('contact');
const aboutContain = document.getElementById('aboutme');
const mainContain = document.getElementById('portfolio');
const homepageContain = document.getElementById('homepage');

const projectsArray = [
  {
    id: 1,
    name: 'Classico old-car test ride',
    description: 'This project is a test-drive booking app for vintange cars , it allows user to make reservations, cancel them as well as add new cars to the collection or delete them!',
    image: 'img/classico.png',
    technologies: ['RoR', 'css', 'React', 'jest', 'heruko'],
    seeProject: 'See Project',
    liveLink: 'https://classico-afternoon-heroku.herokuapp.com/',
    sourceLink: 'https://github.com/redwing555/final-capstone-frontend',
  },
  {
    id: 2,
    name: 'Our Milky way',
    description: 'This project is a website of a fictive astrophysics conference that I build using HTML / CSS / JavaScript .',
    image: 'img/capstone.png',
    technologies: ['css', 'JavaScript', 'html'],
    seeProject: 'See Project',
    liveLink: 'https://redwing555.github.io/Capstone-Project-/',
    sourceLink: 'https://github.com/redwing555/Capstone-Project-',
  },
  {
    id: 3,
    name: 'BudgetVio',
    description: 'An app where you can manage your budget: you can manage a list of transactions associated with a certain category, keeping a detailed record of expenses.',
    image: 'img/budgetvio.png',
    technologies: ['RoR', 'css', 'html', 'Bootstrap', 'Capybara'],
    seeProject: 'See Project',
    liveLink: 'https://budgetvio-app.herokuapp.com/',
    sourceLink: 'https://github.com/redwing555/budget-app-',
  },
  {
    id: 4,
    name: 'Covid Tracker',
    description: 'This Mobile-first App is a Covid data tracking App by Country , the data is from Narrativa API, more interesting functionalities to come ...',
    image: 'img/covid.png',
    technologies: ['css', 'Bootstrap', 'Terminal', 'React'],
    seeProject: 'See Project',
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
  {
    id: 5,
    name: 'Space-X',
    description: 'The Space-X Project is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    image: 'img/spaceX.gif',
    technologies: ['css', 'React', 'Bootstrap'],
    seeProject: 'See Project',
    liveLink: 'https://spacex-hub.netlify.app/',
    sourceLink: 'https://github.com/redwing555/SpaceX-Project',
  },
  {
    id: 6,
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit',
    image: 'img/work1.png',
    technologies: ['RoR', 'css', 'Bootstrap'],
    seeProject: 'See Project',
    liveLink: 'See Live',
    sourceLink: 'See Source',
  },
];

// looping through projects Array and dynamically displaying them.

let portfolioCode = '';
function techStack(elem, techListCode = '') {
  elem.technologies.forEach((technology) => {
    techListCode += `<li><button class="languages">${technology}</button></li>`;
  });
  return techListCode;
}

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
          <ul id="btn1">${techStack(singleProject)}</ul>
        </div>
        <div class="divbtn-btn">
          <button id="${singleProject.id}" class="btn-btn see-project">${singleProject.seeProject}</button> 
        </div>
      </section>`;
});

mainContain.innerHTML = portfolioCode;

const popupBtns = document.querySelectorAll('.see-project');
const popupViews = document.querySelector('.popup-window');

function getPopupDetails(event) {
  const Ids = parseInt(event.target.id, 10);

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
               ${techStack(projectsArray[temp])}
               
                

                
               </ul>
            </div>
  
            <div><p class ="project-description">${projectsArray[temp].description}</p></div>
    
  
             <div class="seelive-seesrc">
             <a href="${projectsArray[temp].liveLink}"> <button class="btn-btn seelive" >  live Demo&nbsp; <img alt="github" src="img/seelive.png" /></button></a> 
              <a href="${projectsArray[temp].sourceLink}"><button class="btn-btn seesource">Source&nbsp; <img alt="github" src="img/seesource.png" /></button></a> 
              
             </div>`;

  body.style.overflow = 'hidden';
  mainContain.style.filter = 'blur(5px)';
  aboutContain.style.filter = 'blur(5px)';
  contactContain.style.filter = 'blur(5px)';
  homepageContain.style.filter = 'blur(5px)';
}

popupBtns.forEach((popupBtn) => {
  popupBtn.addEventListener('click', (event) => {
    getPopupDetails(event);
  });
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

const fullName = document.getElementById('name');
const message = document.getElementById('msg');

const storedData = {
  nameData: '',
  emailData: '',
  messageData: '',
};

if (localStorage.getItem('formData') === null) {
  localStorage.setItem('formData', JSON.stringify(storedData));
} else {
  const ClientData = JSON.parse(localStorage.getItem('formData'));

  fullName.value = ClientData.nameData;
  emailInput.value = ClientData.emailData;
  message.value = ClientData.messageData;
}

form.addEventListener('input', () => {
  storedData.nameData = fullName.value;
  storedData.emailData = emailInput.value;
  storedData.messageData = message.value;

  localStorage.setItem('formData', JSON.stringify(storedData));
});
