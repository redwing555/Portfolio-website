

const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.hide_mobile');
const popupBtns = document.querySelectorAll('.see-project');
const closeBtns = document.querySelectorAll('.closepopup');
const popupViews = document.querySelectorAll('.popup');





const projectsArray = [
              {
                id : 1,
                name: "Multi-Post Stories Gain+Glory",
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam explicabo eos aperiam? Deleniti voluptatem neque in quia voluptatibus voluptas itaque corrupti alias necessitatibus. Blanditiis possimus facilis obcaecati ullam eius!',
                image:"img/work1.png",
                technologies:['Ruby on rails','css','JavaScript','html'],
                seeProject : "See Project",
                liveLink:"See Live",
                sourceLink:"See Source"
              },
              {
                id : 2,
                name: "Multi-Post Stories Gain+Glory",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam explicabo eos aperiam? Deleniti voluptatem neque in quia voluptatibus voluptas itaque corrupti alias necessitatibus. Blanditiis possimus facilis obcaecati ullam eius!",
                image:"img/work1.png",
                technologies:['Ruby on rails','css','JavaScript','html'],
                seeProject : "See Project",
                liveLink:"See Live",
                sourceLink:"See Source"
              },
              {
                id : 3,
                name: "Multi-Post Stories Gain+Glory",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam explicabo eos aperiam? Deleniti voluptatem neque in quia voluptatibus voluptas itaque corrupti alias necessitatibus. Blanditiis possimus facilis obcaecati ullam eius!",
                image:"img/work1.png",
                technologies:['Ruby on rails','css','JavaScript','html'],
                seeProject : "See Project",
                liveLink:"See Live",
                sourceLink:"See Source"
              },
              {
                id : 4,
                name: "Multi-Post Stories Gain+Glory",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam explicabo eos aperiam? Deleniti voluptatem neque in quia voluptatibus voluptas itaque corrupti alias necessitatibus. Blanditiis possimus facilis obcaecati ullam eius!",
                image:"img/work1.png",
                technologies:['Ruby on rails','css','JavaScript','html'],
                seeProject : "See Project",
                liveLink:"See Live",
                sourceLink:"See Source"
              },
              {
                id : 5,
                name: "Multi-Post Stories Gain+Glory",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam explicabo eos aperiam? Deleniti voluptatem neque in quia voluptatibus voluptas itaque corrupti alias necessitatibus. Blanditiis possimus facilis obcaecati ullam eius!",
                image:"img/work1.png",
                technologies:['Ruby on rails','css','JavaScript','html'],
                seeProject : "See Project",
                liveLink:"See Live",
                sourceLink:"See Source"
              },
              {
                id : 6,
                name: "Multi-Post Stories Gain+Glory",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam explicabo eos aperiam? Deleniti voluptatem neque in quia voluptatibus voluptas itaque corrupti alias necessitatibus. Blanditiis possimus facilis obcaecati ullam eius!",
                image:"img/work1.png",
                technologies:['Ruby on rails','css','JavaScript','html'],
                seeProject : "See Project",
                liveLink:"See Live",
                sourceLink:"See Source"
              }
            ];

 let portfolioCode = ``;

 projectsArray.forEach(function(singleProject){


 portfolioCode = portfolioCode + `<section id=project-${singleProject.id} class="container3">

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
            <button class="btn-btn see-project onclick">${singleProject.seeProject}</button>
            
          </div>



        </section>`;


 });

 const projectCards = document.querySelector(".wrapper");
 projectCards.innerHTML = portfolioCode;

 //////////////

 let popupCode = ``;

 projectsArray.forEach(function(singleProject){


 popupCode = popupCode + `<section class="popup">

          
          <button class="closepopup">
            &times;
          </button>
            <img class="projectimg popupimg" alt="Project's webpage screenshot" src="${singleProject.image}" />
          
          <div>
            <h2 class ="project-title">
              ${singleProject.name}
              
            </h2>
          </div>

          <div class="btn-group">
            <ul class="techno" id="btn1">
              <li><button class="ruby languages">${singleProject.technologies[0]}</button></li>
              <li><button class="languages">${singleProject.technologies[1]}</button></li>
              <li><button class="languages">${singleProject.technologies[2]}</button></li>
            </ul>
          </div>

          <div><p class ="project-description">${singleProject.description}</p></div>
  

          <div class="divbtn-btn seelive-seesrc">
            <button class="btn-btn seelive">${singleProject.liveLink}&nbsp;<img alt="github" src="img/seelive.png" /> </button>
            <button class="btn-btn seesource">${singleProject.sourceLink}&nbsp; <a href="#"><img alt="github" src="img/seesource.png" /></a> </button>
            
          </div>



        </section>`;


 });

 const popupCards = document.querySelector(".popup-window");
 popupCards.innerHTML = popupCode;

function popup(popupClick) {
  popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn,i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove('active');

    });
  });
});

 


////////////////////////////////////////


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
  body.style.overflow = 'auto';
}

close.addEventListener('click', closeMenu);

const navList = document.querySelectorAll('.mnitem');
for (let i = 0; i < navList.length; i += 1) {
  navList[i].addEventListener('click', closeMenu);
}