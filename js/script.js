const openbtn = document.querySelector('.nav-bar .toggle-menu');
const mobileMenu = document.querySelector('.nav-bar .mobile-menu');
const menuBar = document.querySelector('.nav-bar .menu-bar');
const closebtn = document.querySelector('.nav-bar .close-menu');
const navLinks = document.querySelector('.nav-bar .mobile-menu .nav-links');

function toggleMenu() {
  mobileMenu.classList.toggle('disable');
  menuBar.classList.toggle('disable');
}

openbtn.addEventListener('click', toggleMenu);
closebtn.addEventListener('click', toggleMenu);
navLinks.addEventListener('click', (e) => {
  if (e.target.className === 'nav-item') {
    toggleMenu();
  }
});
// -----------Dynamic projwct section----------

const projectsInfo = [];
const firstProject = document.querySelector('.work-section .project1');
const projectCards = document.querySelectorAll('.work-section .project-sample');

projectsInfo.push({
  projectName: 'RideEase - A Ruby on Rails and React Project',
  projectLang: ['Ruby on Rails', 'React', 'Postgres'],
  projectImgSrc: './img/ride.png',
  projectImgAlt: 'SavEarly',
  featureImg: './img/ride.png',
  projectshortDescription:
    '"RideEase" is a group project I created, combining the power of Ruby on Rails and React to revolutionize the test drive booking experience.',
  projectDescription: `"RideEase" is a group project I created, combining the power of Ruby on Rails and React to revolutionize the test drive booking experience.
    📅 With "RideEase," users can:
    ✅ Explore a curated selection of cars
    ✅ Easily schedule test drives
    💼 "RideEase" showcases my passion for creating user-friendly applications and integrating cutting-edge technologies.`,

  seeLive: 'https://rideease.onrender.com',
  seeSource: 'https://github.com/shubhambhoyar077/budget-app',
});
projectsInfo.push({
  projectName: 'Crypto Currency ',
  projectLang: ['React', 'CSS', 'API'],
  projectImgSrc: './img/crypto.png',
  projectImgAlt: 'Crypto',
  featureImg: './img/crypto.png',
  projectshortDescription:
    'Crypto is a SPA for users to check the details of top 20 cryptocurrencies. ',
  projectDescription:
    "Introducing the Crypto! 🚀 A sleek and user-friendly website built with React, where you can explore the top 10 trending cryptocurrencies in real-time. Get instant updates on their prices, market caps, and other essential information, all powered by real-time API data. Whether you're a seasoned crypto enthusiast or just curious about the latest trends, Crypto has got you covered. Stay ahead of the game and keep your finger on the pulse of the crypto world with Crypto!",
  seeLive: 'https://crypto-j3cj.onrender.com/',
  seeSource: 'https://github.com/shubhambhoyar077/crypto-currency',
});
projectsInfo.push({
  projectName: 'Space',
  projectLang: ['React', 'CSS', 'API'],
  projectImgSrc: './img/space.png',
  projectImgAlt: 'Space Hub',
  featureImg: './img/space.png',
  projectshortDescription:
    'Space Hub is a webapp built with React and Redux, it fetches data from SpaceX API and Displays it. ',
  projectDescription:
    "Welcome to the Space Travel Hub! 🚀 Embark on an extraordinary journey through the cosmos with our out-of-this-world web application. Developed as a thrilling group project, Space Travel Hub integrates SpaceX's powerful API to offer you an unrivaled experience in the realm of space exploration.",
  seeLive: 'https://space-hub-osb.netlify.app/',
  seeSource: 'https://github.com/shubhambhoyar077/React_Group_Project',
});
projectsInfo.push({
  projectName: 'Game Developer Conference Capstone',
  projectLang: ['html', 'css', 'javascript'],
  projectImgSrc: './img/gdc.png',
  projectImgAlt: 'game developer capstone project',
  featureImg: './img/gdc.png',
  projectshortDescription:
    'Game Developer Conference is a first capstone project of Microverse',
  projectDescription: `Welcome to the Game Developer Conference (GDC) Project! 🎮🕹️ Immerse yourself in the world of game development with this captivating and cutting-edge web application, crafted entirely using JavaScript.

    At GDC, we believe in empowering game developers to unleash their creativity and shape the future of gaming. Dive into a dynamic platform that offers a plethora of resources, insights, and tools to fuel your gaming journey.`,
  seeLive: 'https://shubhambhoyar077.github.io/gdc_capstone/',
  seeSource: 'https://github.com/shubhambhoyar077/gdc_capstone',
});
projectsInfo.push({
  projectName: 'To Do List',
  projectLang: ['html', 'bootstrap', 'JavaScript'],
  projectImgSrc: './img/todolist.png',
  projectImgAlt: 'ToDo list project',
  featureImg: './img/todolist.png',
  projectshortDescription: 'Simple ToDo list to keep trak of your daily tasks ',
  projectDescription:
    "'To-do list' is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. You will build a simple website that allows for doing that, and you will do it using ES6 and Webpack!",
  seeLive: 'https://shubhambhoyar077.github.io/to-do-list/dist/',
  seeSource: 'https://github.com/shubhambhoyar077/to-do-list',
});
projectsInfo.push({
  projectName: 'SpikeOut',
  projectLang: ['GODOT', 'GDScript', 'Google console'],
  projectImgSrc: './img/spike.png',
  projectImgAlt: 'Recipe',
  featureImg: './img/spike.png',
  projectshortDescription:
    'Start rotating and avoid spikes to complete levels.',
  projectDescription: `Start rotating and avoid spikes to complete levels.

    How to play?
    ◉ Touch and Drag to rotate center circle.
    ◉ Avoid Spike.
    ◉ Pop color balls to clear color goals.
    ◉ Clear all goals to complete level.`,
  seeLive: 'https://play.google.com/store/apps/details?id=com.arkrid.spikeout',
  seeSource: '#',
});
projectsInfo.push({
  projectName: 'Leaderboard',
  projectLang: ['html', 'bootstrap', 'JavaScript'],
  projectImgSrc: './img/leader.png',
  projectImgAlt: 'Awesome book project',
  featureImg: './img/leader.png',
  projectshortDescription:
    'This project registers the score and player name using APIs, and it also displays the top players.',
  projectDescription:
    "'This project registers the score and player name using APIs, and it also displays the top players.",
  seeLive: 'https://shubhambhoyar077.github.io/leaderboard/dist/',
  seeSource: 'https://github.com/shubhambhoyar077/leaderboard',
});

function addProjectLang(langList) {
  // const prolangs = model.querySelector('.project-lang');
  let prolangs = '';
  // prolangs.replaceChildren();
  langList.forEach((lang) => {
    // const li = document.createElement('li');
    // li.textContent = lang;
    prolangs += `
          <li>${lang}</li>`;
  });
  return prolangs;
}

function createProjectCards() {
  projectsInfo.forEach((project, index) => {
    if (index === 0) {
      firstProject.innerHTML = `
          <img src=${
            project.projectImgSrc
          } alt="sample image" class="project-img">
          <div class="project-content">
              <h3 class="project-name">${project.projectName}</h3>
              <p class="project-description">${
                project.projectshortDescription
              }</p>
              <ul class="project-lang">
                  ${addProjectLang(project.projectLang)}
              </ul>
              <button type="button" class="half-btn" id="project${index}">See Project</button>
            </div>`;
    } else {
      projectCards[
        index - 1
      ].style.backgroundImage = `url(${project.projectImgSrc})`;
      projectCards[index - 1].innerHTML = `
            <div class="content-wrapper">
                <h3 class="project-name">${project.projectName}</h3>
                <p class="project-description">${
                  project.projectshortDescription
                }</p>
                <ul class="project-lang">
                  ${addProjectLang(project.projectLang)}
                </ul>
            </div>
            <button type="button" class="full-btn" id="project${index}">See Project</button>`;
    }
  });
}

createProjectCards();

// -------------Model----------
const project = document.querySelector('#portfolio .grid-wrapper');
const modelWrapper = document.querySelector('.model-wrapper');
const model = document.querySelector('.model');
const closepopup = document.querySelector('.model .close-popup');

function addProjectInfo(projectObj) {
  model.querySelector('.project-name').textContent = projectObj.projectName;
  model.querySelector('.project-description').textContent =
    projectObj.projectDescription;
  model.querySelector('.project-img').src = projectObj.featureImg;
  model.querySelector('.project-img').alt = projectObj.projectImgAlt;
  model.querySelector('.project-lang').innerHTML = `${addProjectLang(
    projectObj.projectLang
  )}`;
  model.querySelector('.model .see-live').href = projectObj.seeLive;
  model.querySelector('.model .see-source').href = projectObj.seeSource;
}

project.addEventListener('click', (e) => {
  if (e.target.id) {
    const index = e.target.id.replace('project', '');
    if (projectsInfo[index]) {
      modelWrapper.classList.toggle('disable');
      addProjectInfo(projectsInfo[index]);
    }
  }
});

closepopup.addEventListener('click', () => {
  modelWrapper.classList.toggle('disable');
});

// -------------Form----------
const form = document.querySelector('.contact-section .contact-form');
const msg = document.querySelector('.contact-section .contact-form .message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.elements.mail;
  msg.textContent = '';
  if (email.value === email.value.toLowerCase()) {
    form.submit();
  } else {
    msg.textContent = 'Please enter a lowercase email';
  }
});

// ---------Storage-------
function restoreData() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  form.elements.name.value = formData.name;
  form.elements.mail.value = formData.email;
  form.elements.msg.value = formData.msg;
}

function updateLocalStorage() {
  const formData = {
    name: form.elements.name.value,
    email: form.elements.mail.value,
    msg: form.elements.msg.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
  restoreData();
}

form.elements.name.onchange = updateLocalStorage;
form.elements.mail.onchange = updateLocalStorage;
form.elements.msg.onchange = updateLocalStorage;

if (!localStorage.getItem('formData')) {
  updateLocalStorage();
} else {
  restoreData();
}
