//? ======= logic for shipping info page goes here =========== /

document.addEventListener('DOMContentLoaded', () => {
	const orderForm = document.querySelector('.shipping-form');
	const countryElement = document.querySelector('.country-input');
	const name = document.getElementById('customer-name');
	const email = document.getElementById('email-address');
	const phone = document.getElementById('customer-phone');

	const capturedCountryValue = sessionStorage.getItem('destData');

	if (countryElement) {
		countryElement.value = `Your shipping destination has been set to: ${capturedCountryValue}`;
	} else console.log('Country element value is parsed to the order form');

	if (orderForm) {
		orderForm.addEventListener('submit', (e) => {
			e.preventDefault();

			// we are capturing the name and email cos we want to pass them to the success page which will be handled by the payment.js logic. On the success page, we'll retrieve the price and email from the session storage and pass them to the payment gateway for processing
			const capturedName = name.value;
			const capturedEmail = email.value;
			const capturedPhone = phone.value;
			console.log(capturedPhone);

			sessionStorage.setItem('storedName', capturedName);
			sessionStorage.setItem('storedEmail', capturedEmail);
			sessionStorage.setItem('storedPhone', capturedPhone);

			window.location.href = '/success';
		});
	} else console.log('Order form not on this page');
});

// fetching the product price and product name to pass into hidden html form fields
const productName = sessionStorage.getItem('productName');
const productPrice = parseInt(sessionStorage.getItem('productPrice'));
// console.log(typeof productPrice);

if (productPrice || productName) {
	const priceInfo = document.getElementById('price');
	const ProductNameInput = document.getElementById('name');

	if (ProductNameInput && priceInfo) {
		ProductNameInput.value = productName;
		priceInfo.value = productPrice;
	}
} else {
	console.log(
		'Name not being inputted into the product name and price fields. Also this is for shipping info page'
	);
}
