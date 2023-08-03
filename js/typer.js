const professions = [
  'Software Developer',
  'Backend Developer',
  'Frontend Developer',
  'Full Stack Developer',
];
let counter = 0;
let intervalId;

function changeProfession() {
  const professionElement = document.querySelector('#profession');
  professionElement.classList.add('typ-ani');
  professionElement.textContent = `I'm a ${professions[counter]}.`;
  setTimeout(() => {
    professionElement.classList.remove('typ-ani');
  }, 3000);

  counter += 1;
  if (counter === professions.length) {
    clearInterval(intervalId);
  }
}

changeProfession();

intervalId = setInterval(changeProfession, 4000);
