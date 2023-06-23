// init all the variables
const customerNameField = document.getElementById('customer-name');
const productNameField = document.getElementById('product-name');

// fetching relevant storage data
const capturedCustomerName = sessionStorage.getItem('storedName');
const capturedProductName = sessionStorage.getItem('productName');
const emailValue = sessionStorage.getItem('storedEmail');
const phoneValue = sessionStorage.getItem('storedPhone');
console.log(phoneValue);

const priceValue = parseInt(sessionStorage.getItem('productPrice'));
console.log(priceValue);

const storedCurrencyForPayments = sessionStorage.getItem('selectedCurrency');

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

const secret_key = process.env.PAYMENT_API_KEY;

function makePayment() {
	FlutterwaveCheckout({
		public_key: secret_key,
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
