const professions = [
  'Software Developer',
  'Backend Developer',
  'Frontend Developer',
  'Full Stack Developer',
];

const professionElement = document.querySelector('#profession span');
if (professionElement) {
  new Typed('.profession span', {
    strings: professions,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}
