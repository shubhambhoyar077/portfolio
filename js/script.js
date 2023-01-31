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
const projectsInfo = {};
project.addEventListener('click', (e) => {
  if(e.target.id){
    modelWrapper.classList.toggle('disable');
    addProjectInfo(projectsInfo[e.target.id]);
  }
});

function addProjectInfo(projectObj){
  model.querySelector('.project-name').textContent = projectObj.projectName;
  model.querySelector('.project-description').textContent = projectObj.projectDescription;
  model.querySelector('.project-img').src = projectObj.projectImgSrc;
  model.querySelector('.project-img').alt = projectObj.projectImgAlt;
  addProjectLang(projectObj.projectLang);

}

let addProjectLang = (langList) => {
  const prolangs = model.querySelector('.project-lang');
  for(let lang in langList){
    const li = document.createElement('li');
    li.textContent = langList[lang];
    prolangs.appendChild(li);
  }
}

projectsInfo.project1 = {
  projectName: "Multi-Post Stories",
  projectLang: ['html', 'css', 'Ruby on Rails'],
  projectImgSrc: "./img/proimg.png",
  projectImgAlt: "project image with 10",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer \
  took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, \
  but also the leap into electronic typesetting, remaining essent",
}
projectsInfo.project2 = {
  projectName: "Multi-Post Stories",
  projectLang: ['html', 'css', 'Ruby on Rails'],
  projectImgSrc: "./img/proimg.png",
  projectImgAlt: "project image with 10",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer \
  took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, \
  but also the leap into electronic typesetting, remaining essent",
}
projectsInfo.project3 = {
  projectName: "Multi-Post Stories",
  projectLang: ['html', 'css', 'Ruby on Rails'],
  projectImgSrc: "./img/proimg.png",
  projectImgAlt: "project image with 10",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer \
  took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, \
  but also the leap into electronic typesetting, remaining essent",
}
projectsInfo.project4 = {
  projectName: "Multi-Post Stories",
  projectLang: ['html', 'css', 'Ruby on Rails'],
  projectImgSrc: "./img/proimg.png",
  projectImgAlt: "project image with 10",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer \
  took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, \
  but also the leap into electronic typesetting, remaining essent",
}
projectsInfo.project5 = {
  projectName: "Multi-Post Stories",
  projectLang: ['html', 'css', 'Ruby on Rails'],
  projectImgSrc: "./img/proimg.png",
  projectImgAlt: "project image with 10",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer \
  took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, \
  but also the leap into electronic typesetting, remaining essent",
}
projectsInfo.project6 = {
  projectName: "Multi-Post Stories",
  projectLang: ['html', 'css', 'Ruby on Rails'],
  projectImgSrc: "./img/proimg.png",
  projectImgAlt: "project image with 10",
  projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer \
  took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, \
  but also the leap into electronic typesetting, remaining essent",
}