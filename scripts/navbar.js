const btnNavClicked = () => {
	let navToggle = document.querySelector('.hamburger-menu');

	const navActive = () => {
		let navLinks = document.querySelector('.nav__links');
		navLinks.classList.toggle('active');
		navToggle.classList.toggle('menu-active');
	};
	navToggle.addEventListener('click', navActive);
};

btnNavClicked();
