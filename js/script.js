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

// -------------Model----------
const project = document.querySelector('#portfolio .grid-wrapper');
const modelWrapper = document.querySelector('.model-wrapper');
const model = document.querySelector('.model');
const closepopup = document.querySelector('.model .close-popup');
const projectsInfo = {};

const addProjectLang = (langList) => {
  const prolangs = model.querySelector('.project-lang');
  prolangs.replaceChildren();
  langList.forEach((lang) => {
    const li = document.createElement('li');
    li.textContent = lang;
    prolangs.appendChild(li);
  });
};

function addProjectInfo(projectObj) {
  model.querySelector('.project-name').textContent = projectObj.projectName;
  model.querySelector('.project-description').textContent = projectObj.projectDescription;
  model.querySelector('.project-img').src = projectObj.projectImgSrc;
  model.querySelector('.project-img').alt = projectObj.projectImgAlt;
  addProjectLang(projectObj.projectLang);
  model.querySelector('.model .see-live').href = projectObj.seeLive;
  model.querySelector('.model .see-source').href = projectObj.seeSource;
}

project.addEventListener('click', (e) => {
  if (e.target.id) {
    modelWrapper.classList.toggle('disable');
    addProjectInfo(projectsInfo[e.target.id]);
  }
});

closepopup.addEventListener('click', () => {
  modelWrapper.classList.toggle('disable');
});

projectsInfo.project1 = {
  projectName: 'Multi-Post Stories',
  projectLang: ['html', 'css', 'Ruby on Rails'],
  projectImgSrc: './img/proimg.png',
  projectImgAlt: 'project image with 10',
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
};
projectsInfo.project2 = {
  projectName: 'Profesional Art Printing Data 1',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  projectImgSrc: './img/proimg.png',
  projectImgAlt: 'project image with 10',
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
};
projectsInfo.project3 = {
  projectName: 'Profesional Art Printing Data 2',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  projectImgSrc: './img/proimg.png',
  projectImgAlt: 'project image with 10',
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
};
projectsInfo.project4 = {
  projectName: 'Profesional Art Printing Data 3',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  projectImgSrc: './img/proimg.png',
  projectImgAlt: 'project image with 10',
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
};
projectsInfo.project5 = {
  projectName: 'Profesional Art Printing Data 4',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  projectImgSrc: './img/proimg.png',
  projectImgAlt: 'project image with 10',
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
};
projectsInfo.project6 = {
  projectName: 'Profesional Art Printing Data 5',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  projectImgSrc: './img/proimg.png',
  projectImgAlt: 'project image with 10',
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
};
projectsInfo.project7 = {
  projectName: 'Profesional Art Printing Data 6',
  projectLang: ['html', 'bootstrap', 'Ruby'],
  projectImgSrc: './img/proimg.png',
  projectImgAlt: 'project image with 10',
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  seeLive: '#',
  seeSource: '#',
};