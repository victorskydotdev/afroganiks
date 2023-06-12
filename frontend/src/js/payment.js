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

customerNameField.textContent = capturedCustomerName;
productNameField.textContent = capturedProductName;

const paymentForm = document.getElementById('payment');

paymentForm.addEventListener('submit', payWithPaystack, false);

function payWithPaystack(e) {
	e.preventDefault();

	let handler = PaystackPop.setup({
		key: 'pk_test_51d682f716acbcc54d5ebb0ec9c1dffa715d40d1',

		email: emailValue,

		amount: priceValue * 100,

		ref: '' + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you

		// label: "Optional string that replaces customer email"

		onClose: function () {
			alert('Window closed.');
		},

		callback: function (response) {
			let message = 'Payment complete! Reference: ' + response.reference;

			alert(message);

			// redirect to a thank you page
			window.location.href = '/';
		},
	});

	handler.openIframe();
}
