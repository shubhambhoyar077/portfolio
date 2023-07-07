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
  projectName: 'Recipe App',
  projectLang: ['Ruby on Rails', 'bootstrap', 'Postgres'],
  projectImgSrc: './img/recipe1.png',
  projectImgAlt: 'Recipe',
  featureImg: './img/recipe2.png',
  projectshortDescription:
    'The Recipe app keeps track of all your recipes, ingredients, and inventory. ',
  projectDescription:
    'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. ',
  seeLive: '#',
  seeSource: 'https://github.com/shubhambhoyar077/recipe-app',
});
projectsInfo.push({
  projectName: 'SavEarly:- Budget App',
  projectLang: ['Ruby on Rails', 'bootstrap', 'Postgres'],
  projectImgSrc: './img/categorysave.png',
  projectImgAlt: 'SavEarly',
  featureImg: './img/trasave.png',
  projectshortDescription:
    'SavEarly is a web app that helps users categorize and manage their transactions for easy expense tracking. Stay organized and gain insights into your spending habits with this user-friendly tool.',
  projectDescription:
    'SavEarly is a web app that helps users categorize and manage their transactions for easy expense tracking. Stay organized and gain insights into your spending habits with this user-friendly tool.',
  seeLive: 'https://savearly.onrender.com/',
  seeSource: 'https://github.com/shubhambhoyar077/budget-app',
});
projectsInfo.push({
  projectName: 'Crypto Currency ',
  projectLang: ['React', 'CSS', 'API'],
  projectImgSrc: './img/crypto1.png',
  projectImgAlt: 'Crypto',
  featureImg: './img/crypto2.png',
  projectshortDescription:
    'Crypto is a SPA for users to check the details of top 20 cryptocurrencies. ',
  projectDescription:
    'Crypto is a SPA for users to check the details of top 20 cryptocurrencies. ',
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
    'Space Hub is a webapp built with React and Redux, it fetches data from SpaceX API and Displays it. ',
  seeLive: 'https://space-hub-osb.netlify.app/',
  seeSource: 'https://github.com/shubhambhoyar077/React_Group_Project',
});
projectsInfo.push({
  projectName: 'Game Developer Conference Capstone',
  projectLang: ['html', 'css', 'javascript'],
  projectImgSrc: './img/gdc_capstone.png',
  projectImgAlt: 'game developer capstone project',
  featureImg: './img/gdc_capstone.png',
  projectshortDescription:
    'Game Developer Conference is a first capstone project of Microverse',
  projectDescription:
    'This capstone project is base on real time application and topic for this project is Game Developer Conference 2023',
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
  projectName: 'Awesome Book',
  projectLang: ['html', 'bootstrap', 'JavaScript'],
  projectImgSrc: './img/bookstore.png',
  projectImgAlt: 'Awesome book project',
  featureImg: './img/bookstore.png',
  projectshortDescription: 'Awesome Book, Created using ES6 javascript.',
  projectDescription:
    "'Awesome books' is a simple website that displays a list of books and allows you to add and remove books from that list. By building this application, I have learn how to manage data using JavaScript. Thanks to this my website will be more interactive. I also use a medium-fidelity wireframe to build the UI.",
  seeLive: 'https://shubhambhoyar077.github.io/awesome-book/',
  seeSource: 'https://github.com/shubhambhoyar077/awesome-book',
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
  model.querySelector('.project-description').textContent = projectObj.projectDescription;
  model.querySelector('.project-img').src = projectObj.featureImg;
  model.querySelector('.project-img').alt = projectObj.projectImgAlt;
  model.querySelector('.project-lang').innerHTML = `${addProjectLang(
    projectObj.projectLang,
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
