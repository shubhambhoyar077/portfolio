const professions = [
  'Software Developer',
  'Backend Developer',
  'Frontend Developer',
  'Full Stack Developer',
];
let counter = 0;

function changeProfession() {
  const professionElement = document.querySelector('#profession');
  professionElement.classList.add('typ-ani');
  professionElement.textContent = `I'm a ${professions[counter]}.`;
  setTimeout(() => {
    professionElement.classList.remove('typ-ani');
  }, 3000);

  counter++;
  if (counter === professions.length) {
    clearInterval(intervalId);
  }
}

changeProfession();

const intervalId = setInterval(changeProfession, 4000);
