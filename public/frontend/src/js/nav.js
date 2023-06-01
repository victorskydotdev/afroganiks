document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.getElementById('nav-btn');

	const nav = document.getElementById('nav-toggle');

	toggleBtn.addEventListener('click', () => {
		const navToggle = () => {
			nav.classList.toggle('openNav');
		};

		navToggle();
	});
});
