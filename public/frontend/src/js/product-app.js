//? this logic is for the product page

// user location modal logic
const userLocation = document.querySelectorAll('.country-btn');
const userLocationModal = document.querySelector('.user-location-modal');

const convertCurrency = () => {
	for (let locationBtn = 0; locationBtn < userLocation.length; locationBtn++) {
		const numOfBtns = userLocation[locationBtn];

		// init product currency and amount elements
		const amount = document.querySelectorAll('.amount');
		const currency = document.querySelectorAll('.currency');

		numOfBtns.addEventListener('click', () => {
			// userLocationModal.style.display = 'none';

			alert(
				'Hey there! Please our product page is down. Please do bear with us as our development team is actively working to revamp our product page in order to give you an amazing shopping experience on Afroganiks.com. While you are here, please use the WhatsApp icon at the bottom-right of the screen to chat with us directly, thank you!'
			);
		});
	}
};

convertCurrency();

// for (let i = 0; i < currency.length; i++) {
// 	console.log(currency[i].textContent);
// }

// for (let i = 0; i < amount.length; i++) {
// 	console.log(amount[i].textContent);
// }

document.addEventListener('DOMContentLoaded', () => {
	// the code below runs when the dom content is loaded

	// fetch json product data
	const url = '/frontend/json/product-data.json';

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			// Iterate over the order buttons using a for loop
			// console.log(data.products[0]);

			const orderButtons = document.querySelectorAll('.order-btn');

			// loop through the order buttons
			for (let i = 0; i < orderButtons.length; i++) {
				const button = orderButtons[i];
				const prodId = data.products[i].id;

				// assign the product id to the button
				button.dataset.prodId = prodId;

				button.addEventListener('click', () => {
					// Find the product object with the matching ID in the JSON data
					const productId = button.dataset.prodId;
					const product = data.products.find((item) => item.id === productId);

					// Store the product ID in session storage
					sessionStorage.setItem('productId', productId);

					window.location.href = '/product-description';
				});
			}
		})
		.catch((error) => {
			console.error('Error:', error);
		});
});
