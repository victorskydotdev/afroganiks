document.addEventListener('DOMContentLoaded', () => {
	const orderForm = document.querySelector('.shipping-form');

	const name = document.getElementById('customer-name').value;

	const email = document.getElementById('email-address').value;

	orderForm.addEventListener('submit', (e) => {
		e.preventDefault();

		const capturedName = name;
		const capturedEmail = email;

		console.log(capturedEmail, capturedName);

		sessionStorage.setItem('storedName', capturedName);
		sessionStorage.setItem('storedEmail', capturedEmail);

		window.location.href = '/success';
	});
});

const productName = sessionStorage.getItem('productName');
const productPrice = parseInt(sessionStorage.getItem('productPrice'));

if (productPrice || productName) {
	const priceInfo = document.getElementById('price');
	const ProductNameInput = document.getElementById('name');

	ProductNameInput.value = productName;
	priceInfo.value = productPrice;
} else {
	console.log('nothing found in session storage');
}

//===== logic for payments =====//

// initialize all the global variables on the soccess page
const nameHeading = document.getElementById('customer-name');
const productInfoWrap = document.getElementById('product-name');

// fetch the session storage data again
// fetch the sessionStorage data (name and email)
const customerName = sessionStorage.getItem('storedName');
const customerEmail = sessionStorage.getItem('storedEmail');
const productInfo = sessionStorage.getItem('productName');

if (!(productInfoWrap || nameHeading)) {
	console.log('nothing');
} else {
	nameHeading.textContent = customerName;
	// productInfoWrap.textContent = productInfo;
}
