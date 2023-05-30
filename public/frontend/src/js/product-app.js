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
