// const prod = sessionStorage.getItem('productId');

document.addEventListener('DOMContentLoaded', () => {
	// Retrieve the product ID from session storage
	const productId = sessionStorage.getItem('productId');
	// console.log(productId);

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

			<div class="wrap">
				<div class="product-image-wrap">
					<div class="img"><img class"product-img" src="${product.productImage}" alt="${
		product.name
	}"></div>
				</div>

				<div class="product-info">
				<h1 id="product-name" value="${product.name}" class="heading">${
		product.name
	}</h1>
					<p id="product-price" value="${product.price}" class="price-text">Price: $${
		product.price
	}</p>
				</div>
			</div>

			<!-- production description wrap -->
			<div class="product-desc-wrap">
				<h3 class="prod-desc-heading">Product Description</h3>

				<p class="description-text">${
					product.pharmacology[0] !== undefined
						? `<p>${product.pharmacology[0]}</p>`
						: ''
				}</p>
				

				<button id="lm-btn" class="learnmore-btn">Read more ></button>
			</div>
			<!-- end of product description box -->

			<div class="payment-box">
				<form class="form-wrap" method="post">

					<div class="location-wrap">
						<label>Ship to:</label>

						<span><i class="fa-solid fa-location-dot"></i> <input type="text" id="userDest" placeholder="Destination" value="" ></span>
						
					</div>

				
				<button class="btn" id="getToFormPageBtn">Order now</button>
				</form>
				
			</div>
    </section>
  `;

	// Set the template as the HTML content of the container
	if (container) {
		container.innerHTML = template;
	}

	// fetch the dynamically rendered product details to parse to the shipping form and payment function
	const productName = `${product.name}`;
	const productPrice = `${product.price}`;

	function gotoNextPage() {
		const getToFormBtn = document.getElementById('getToFormPageBtn');
		// console.log(getToFormBtn);

		const userDest = document.getElementById('userDest');

		if (getToFormBtn) {
			getToFormBtn.addEventListener('click', (event) => {
				event.preventDefault();

				const userDestValue = userDest.value;
				sessionStorage.setItem('destData', userDestValue);

				sessionStorage.setItem('productName', productName);
				sessionStorage.setItem('productPrice', productPrice);

				if (productName && productPrice && userDestValue) {
					console.log('these are available');
					window.location.href = '/shipping-info';
				} else console.log('not available');
			});
		} else console.log('get to button is not on this page');
	}

	gotoNextPage();
}
