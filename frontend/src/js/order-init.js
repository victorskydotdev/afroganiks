// logic for shipping info page goes here =========== /

// const customerOrderProds = sessionStorage.getItem('orderedProducts');
const customerOrderProds = sessionStorage.getItem('loggedProducts');

const productTotalAmount = sessionStorage.getItem('total');

document.addEventListener('DOMContentLoaded', () => {
	const orderForm = document.querySelector('.shipping-form');
	// const countryElement = document.querySelector('.country-input');
	const name = document.getElementById('customer-name');
	const email = document.getElementById('email-address');
	const phone = document.getElementById('customer-phone');

	if (orderForm) {
		orderForm.addEventListener('submit', (e) => {
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
const productName = customerOrderProds;
const productPrice = parseInt(productTotalAmount);
sessionStorage.setItem('productName', productName);

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
