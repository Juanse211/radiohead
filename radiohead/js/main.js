const btnSwitch = document.querySelector('#button__body');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
});