document.addEventListener('DOMContentLoaded', () => {
	// the code below runs when the dom content is loaded

	// fetch json product data
	const url = '/frontend/json/product-data.json';

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			// Iterate over the order buttons using a for loop
			console.log(data);
			const orderButtons = document.querySelectorAll('.order-btn');

			// loop through the order buttons
			for (let i = 0; i < orderButtons.length; i++) {
				const button = orderButtons[i];

				// const product = data[i];
				// console.log(product);
				console.log(button);

				// assign the product id to the button
				// button.dataset.productId = product.id;

				button.addEventListener('click', () => {
					window.location.href = '/product-description';
				});
			}
		});
	// .catch((error) => {
	// 	console.error('Error:', error);
	// });
});
