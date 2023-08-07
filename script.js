const date = document.getElementById('date');
const setCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  date.textContent = currentYear;
};
setCurrentYear();

// hamburger menu
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const socials = document.querySelector('.social-nav');
const navLinks = document.querySelectorAll('.nav-links');

const toggleMobileMenu = () => {
  hamburger.classList.toggle('open');
  navList.classList.toggle('open');
  socials.classList.toggle('open');
  document.body.classList.toggle('open');
};

navLinks.forEach((link) => link.addEventListener('click', toggleMobileMenu));
hamburger.addEventListener('click', toggleMobileMenu);

// initialize aos (library for scroll animation)
AOS.init();

const professions = [
  'Software Developer',
  'Backend Developer',
  'Frontend Developer',
  'Full Stack Developer',
];

const professionElement = document.querySelector('.service span');
if (professionElement) {
  new Typed('.service span', {
    strings: professions,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}

const colorModeBtn = document.getElementById('mode');

// Function to toggle color mode
function toggleColorMode() {
  console.log('dkfvbh');
  const isDarkMode = document.documentElement.classList.contains('light-mode');
  document.documentElement.classList.toggle('light-mode', !isDarkMode);
}

// Add click event listener to the button
colorModeBtn.addEventListener('click', toggleColorMode);
