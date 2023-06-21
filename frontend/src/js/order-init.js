document.addEventListener('DOMContentLoaded', () => {
	const orderForm = document.querySelector('.shipping-form');
	const countryElement = document.querySelector('.country-input');
	const name = document.getElementById('customer-name');
	const email = document.getElementById('email-address');

	const capturedCountryValue = sessionStorage.getItem('destData');

	if (countryElement) {
		countryElement.value = `Your shipping destination has been set to: ${capturedCountryValue}`;
	} else console.log('Country element value is parsed to the order form');

	if (orderForm) {
		orderForm.addEventListener('submit', (e) => {
			e.preventDefault();

			// we are capturing the name and email cos we want to pass them to the next page. on the success page, we'll retrieve the price and email from the session storage and pass them to the payment gateway for processing
			const capturedName = name.value;
			const capturedEmail = email.value;

			sessionStorage.setItem('storedName', capturedName);
			sessionStorage.setItem('storedEmail', capturedEmail);

			window.location.href = '/success';
		});
	} else console.log('Order form not on this page');
});

const productName = sessionStorage.getItem('productName');
const productPrice = parseInt(sessionStorage.getItem('productPrice'));

if (productPrice || productName) {
	const priceInfo = document.getElementById('price');
	const ProductNameInput = document.getElementById('name');

	if (ProductNameInput && priceInfo) {
		ProductNameInput.value = productName;
		priceInfo.value = productPrice;
	}
} else {
	console.log('nothing found in session storage');
}
