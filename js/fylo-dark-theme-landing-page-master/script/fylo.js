const form = document.getElementById('form');
// const email = document.getElementById('email');

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = form['email'];
  const emailValue = email.value;
  const small = form.querySelector('small');

	if (!emailValue) {
		// say it's empty
		email.classList.add('error');
		small.innerText = 'Email field cannot be blank!';
		small.style.display = 'inline';
	} 
	else if (!isValidEmail(emailValue)) {
	// 	// say it's invalid
	email.classList.add('error');
		small.innerText = 'Email is invalid!';
		small.style.display = 'inline';
	 }
	 else {
		// submit it
		email.classList.remove('error');
		small.innerText = '';
		small.style.display = 'none';
	}
});

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
