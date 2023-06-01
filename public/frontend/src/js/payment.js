const paymentForm = document.getElementById('payment');

const productName = sessionStorage.getItem('productName');
const productPrice = parseInt(sessionStorage.getItem('productPrice'));

// pass the fetched product price and product name into the relevant hidden form fields so that they can be accessed in the database when an order has been placed bu the customer
if (productPrice || productName) {
	const priceInfo = document.getElementById('price');
	const NameOfInputField = document.getElementById('name');

	priceInfo.value = productPrice;
	NameOfInputField.value = productName;
} else {
	console.log('nothing found in session storage');
}

console.log(emailInfo.value);

// listening for the submit event on the shipping info form so that they paystack payment API cantrigger and initiate payments
paymentForm.addEventListener('submit', payWithPaystack());

function payWithPaystack(e) {
	e.preventDefault();

	let handler = PaystackPop.setup({
		key: 'pk_test_651b1d0cbcbe5f7d43887faa975ad7abfbdd82fc', // Replace with your public key

		email: emailInfo.value,

		amount: priceInfo.value * 100,

		ref: '' + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you

		// label: "Optional string that replaces customer email"

		onClose: function () {
			alert('Window closed.');
		},

		callback: function (response) {
			let message = 'Payment complete! Reference: ' + response.reference;

			alert(message);
		},
	});

	handler.openIframe();
}
