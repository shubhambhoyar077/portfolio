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
  projectName: 'Multi-Post Stories',
  projectLang: ['html', 'css', 'bootstrap', 'Ruby'],
  projectImgSrc: './img/firstproject-img.png',
  projectImgAlt: 'project image with 10',
  featureImg: './img/proimg.png',
  projectshortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
});
projectsInfo.push({
  projectName: 'Profesional Art Printing Data',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  projectImgSrc: './img/project-bag.png',
  projectImgAlt: 'project image with 10',
  featureImg: './img/proimg.png',
  projectshortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
});
projectsInfo.push({
  projectName: 'Profesional Art Printing Data',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  projectImgSrc: './img/project-bag.png',
  projectImgAlt: 'project image with 10',
  featureImg: './img/proimg.png',
  projectshortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
});
projectsInfo.push({
  projectName: 'Profesional Art Printing Data',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  projectImgSrc: './img/project-bag.png',
  projectImgAlt: 'project image with 10',
  featureImg: './img/proimg.png',
  projectshortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
});
projectsInfo.push({
  projectName: 'Profesional Art Printing Data',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  projectImgSrc: './img/project-bag.png',
  projectImgAlt: 'project image with 10',
  featureImg: './img/proimg.png',
  projectshortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
});
projectsInfo.push({
  projectName: 'Profesional Art Printing Data',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  projectImgSrc: './img/project-bag.png',
  projectImgAlt: 'project image with 10',
  featureImg: './img/proimg.png',
  projectshortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
});
projectsInfo.push({
  projectName: 'Profesional Art Printing Data',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  projectImgSrc: './img/project-bag.png',
  projectImgAlt: 'project image with 10',
  featureImg: './img/proimg.png',
  projectshortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
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
          <img src=${project.projectImgSrc} alt="sample image" class="project-img">
          <div class="project-content">
              <h3 class="project-name">${project.projectName}</h3>
              <p class="project-description">${project.projectshortDescription}</p>
              <ul class="project-lang">
                  ${addProjectLang(project.projectLang)}
              </ul>
              <button type="button" class="half-btn" id="project${index}">See Project</button>
            </div>`;
    } else {
      projectCards[index - 1].innerHTML = `
            <div class="content-wrapper">
                <h3 class="project-name">${project.projectName}</h3>
                <p class="project-description">${project.projectshortDescription}</p>
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
  model.querySelector('.project-lang').innerHTML = `${addProjectLang(projectObj.projectLang)}`;
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
function fillData() {
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
  fillData();
}

form.elements.name.onchange = updateLocalStorage;
form.elements.mail.onchange = updateLocalStorage;
form.elements.msg.onchange = updateLocalStorage;

if (!localStorage.getItem('formData')) {
  updateLocalStorage();
} else {
  fillData();
}