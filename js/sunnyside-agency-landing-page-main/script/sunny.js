const hamburger=document.getElementById('hamburger');
const { body } = document;
// const menu=document.getElementById('menu');

hamburger.addEventListener ('click', e => {
	body.classList.toggle('show-nav');
});

