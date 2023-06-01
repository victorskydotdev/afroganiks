document.addEventListener('DOMContentLoaded', () => {
	const checkout = document.querySelector('.checkout-btn');
	const name = document.getElementById('customer-name').value;
	const email = document.getElementById('email-address').value;

	checkout.addEventListener('click', () => {
		const capturedName = name;
		const capturedEmail = email;

		console.log(capturedEmail, capturedName);

		sessionStorage.setItem('storedName', capturedName);
		sessionStorage.setItem('storedEmail', capturedEmail);

		window.location.href = '/success';
	});
});
