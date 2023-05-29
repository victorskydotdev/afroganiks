// const prod = sessionStorage.getItem('productId');

document.addEventListener('DOMContentLoaded', () => {
	// Retrieve the product ID from session storage
	const productId = sessionStorage.getItem('productId');
	console.log(productId);

	if (productId) {
		// Fetch the JSON product data
		const url = '/frontend/json/product-data.json';
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				// Find the product object with the matching ID in the JSON data
				const product = data.products.find((item) => item.id === productId);

				if (product) {
					renderProduct(product);
					// Render the product information to the DOM or perform other actions
				} else {
					console.log('Product not found');
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	} else {
		console.log('Product ID not found in session storage');
	}
});

function renderProduct(product) {
	const container = document.getElementById('product-container');

	// HTML template
	const template = `
    <section class="product">

			<div class="product-image-wrap">
				<img class"product-img" src="${product.productImage}" alt="${product.name}">
			</div>

      <div class="product-content">
				<h1 class="heading">${product.name}</h1>
				<p class="price-text">Price: $${product.price}</p>
			</div>

			<!-- ***comment*** product description -->
			<!-- <div class="product-desc-wrap">
				<p>${product.description}</p>
			</div> -->

			<div class="payment-box">
				<form class="form-wrap" action="#" method="post" netlify>

					<div class="location-wrap">
						<label>Ship to:</label>

						<span><i class="fa-solid fa-location-dot"></i> <input placeholder="Nigeria" ></span>
						
					</div>

				
				<button class="btn">Order now</button>
				</form>
				
			</div>
    </section>
  `;

	// Set the template as the HTML content of the container
	container.innerHTML = template;
}
