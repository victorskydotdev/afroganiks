// init all the variables
const customerNameField = document.getElementById('customer-name');
const productNameField = document.getElementById('product-name');

// fetching relevant storage data
const capturedCustomerName = sessionStorage.getItem('storedName');
const capturedProductName = sessionStorage.getItem('productName');

console.log(capturedProductName);
const emailValue = sessionStorage.getItem('storedEmail');
const phoneValue = sessionStorage.getItem('storedPhone');
console.log(phoneValue);

const priceValue = parseInt(sessionStorage.getItem('total'));
console.log(priceValue);
console.log(priceValue);

const storedCurrencyForPayments = localStorage.getItem('selectedCurrency');

let paymentCurrency;

if (storedCurrencyForPayments === '£') {
	paymentCurrency = 'GBP';
} else if (storedCurrencyForPayments === '$') {
	paymentCurrency = 'USD';
} else if (storedCurrencyForPayments === 'N') {
	paymentCurrency = 'NGN';
} else if (storedCurrencyForPayments === 'GH₵') {
	paymentCurrency = 'GHS';
} else {
	console.log("currency doesn't exist");
}

if (customerNameField) {
	customerNameField.textContent = capturedCustomerName;
}
if (productNameField) {
	productNameField.textContent = capturedProductName;
}

const paymentForm = document.getElementById('payment');

if (paymentForm) {
	paymentForm.addEventListener('submit', makePayment, false);
}

const paymentKey = sessionStorage.getItem('productItem');

function makePayment() {
	// generating distinct payment ref and pass it to the payment object

	FlutterwaveCheckout({
		public_key: paymentKey,
		tx_ref: 'titanic-48981487343MDI0NzMx',
		amount: priceValue,
		currency: paymentCurrency,
		payment_options: 'card, banktransfer, ussd',

		customer: {
			email: emailValue,
			name: capturedCustomerName,
			phone_number: phoneValue,
		},

		customizations: {
			title: 'Afroganiks Industries Limited',
			description: 'Product Payment',
		},
	});
}
