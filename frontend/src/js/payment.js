// init all the variables
const customerNameField = document.getElementById('customer-name');
const productNameField = document.getElementById('product-name');

// fetching relevant storage data
const capturedCustomerName = sessionStorage.getItem('storedName');
const capturedProductName = sessionStorage.getItem('productName');
const emailValue = sessionStorage.getItem('storedEmail');
console.log(emailValue);
const priceValue = parseInt(sessionStorage.getItem('productPrice'));
console.log(priceValue);

// console.log(process.env.PAYMENT_API_KEY);

customerNameField.textContent = capturedCustomerName;
productNameField.textContent = capturedProductName;

const paymentForm = document.getElementById('payment');

paymentForm.addEventListener('submit', makePayment, false);

const secret_key = process.env.PAYMENT_API_KEY;

function makePayment() {
	FlutterwaveCheckout({
		public_key: secret_key,
		tx_ref: 'titanic-48981487343MDI0NzMx',
		amount: priceValue,
		currency: 'USD',
		payment_options: 'card, banktransfer, ussd',

		customer: {
			email: emailValue,
			name: capturedCustomerName,
			phone_number: '08100784622',
		},
		customizations: {
			title: 'Afroganiks Industries Limited',
			description: 'Product Payment',
		},
	});
}
