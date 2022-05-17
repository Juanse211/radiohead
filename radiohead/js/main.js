const btnSwitch = document.querySelector('#switch__body');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');

// Save mode in local storage
  if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode', 'true');
  } else{
		localStorage.setItem('dark-mode', 'false');
  }
});

//
if(localStorage.getItem('dark-mode') === 'true'){
  document.body.classList.add('dark');
} else{
  document.body.classList.remove('dark');
}

// Save switch condition.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
} 