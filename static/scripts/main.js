// prevent scroll when about is open 
const aboutModal = document.getElementById('details');
const aboutBtn = document.querySelector('.about__button');

aboutBtn.addEventListener('click', (e) => {
  if (aboutModal.open === false) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
  console.log(aboutModal.open);
});

