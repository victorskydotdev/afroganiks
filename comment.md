//? product description logic goes here ****\*\*\*\*****
//?************************\*************************/
// const storedCurrency = sessionStorage.getItem('selectedCurrency');

// console.log(storedCurrency);

// document.addEventListener('DOMContentLoaded', () => {
// // Retrieve the product ID from session storage
// const productId = sessionStorage.getItem('productId');
// // console.log(productId);

// if (productId) {
// // Fetch the JSON product data
// const url = '/frontend/json/product-data.json';
// fetch(url)
// .then((response) => response.json())
// .then((data) => {
// // Find the product object with the matching ID in the JSON data
// const product = data.products.find((item) => item.id === productId);

// if (product) {
// renderProduct(product);
// // Render the product information to the DOM or perform other actions
// } else {
// console.log('Product not found');
// }
// })
// .catch((error) => {
// console.error('Error:', error);
// });
// } else {
// console.log('Product ID not found in session storage');
// }
// });

// function renderProduct(product) {
// const container = document.getElementById('product-container');

// const currency = storedCurrency;

// const nairaExchangeRate = 819.99; // naira
// const ukExchangeRate = 0.79; // pounds
// // const eurExchangeRate = 0.91; // euro
// const ghExchangeRate = 11.25; // cedis

// // Define a variable to hold the calculated amount
// let amount;

// // Perform the calculation based on the currency value using a switch statement
// switch (currency) {
// case 'N':
// amount = `${product.price}` _ Math.round(nairaExchangeRate);
// break;
// // case '€':
// // amount = `${product.price}` _ Math.round(eurExchangeRate) - 1;
// // break;
// case '£':
// amount = `${product.price}` _ Math.round(ukExchangeRate) - 1;
// break;
// case 'GH₵':
// amount = `${product.price}` _ Math.round(ghExchangeRate) - 1;
// break;
// default:
// amount = `${product.price}`;
// }

// HTML template
/\* const template = `
<section class="product">

    		<div class="wrap">
    			<div class="product-image-wrap">
    				<div class="img"><img class"product-img" src="${product.productImage}" alt="${
    	product.name
    }">
    				</div>
    			</div>

    			<div class="product-info">
    				<h1 id="product-name" value="${product.name}" class="heading">${product.name}
    				</h1>

    				<p id="product-price" value="${product.price}" class="price-text">Price:
    					<span class="currency">${currency}</span>
    					<span id="product-amount">
    						${amount}
    					</span>
    				</p>
    			</div>
    		</div>

    		<!-- production description wrap -->
    		<div class="product-desc-wrap">
    			<h3 class="prod-desc-heading">Product Description</h3>

    			<p class="description-text">${
    				product.pharmacology[0] !== undefined
    					? `<p>${product.pharmacology[0]}</p>`
    					: 'Product description not loaded from the server. Please chat with us with either the WhatsApp or Chat icons at the bottom right your screen'
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

`; \*/

// Set the template as the HTML content of the container
// if (container) {
// container.innerHTML = template;
// } else {
// }

// fetch the dynamically rendered product details to parse to the shipping form and payment function
// const orderedProducts = sessionStorage.getItem('orderedProducts');

// const productName = `${product.name}`;

// // const productPrice = `${product.price}`;
// const productPriceValue = document.getElementById('product-amount');
// if (productPriceValue !== null) {
// // const productPrice = productPriceValue.outerText;
// const productPrice = amount;

// function gotoNextPage() {
// const getToFormBtn = document.getElementById('getToFormPageBtn');
// // console.log(getToFormBtn);
// console.log(orderedProducts);

// console.log('something is happening');

// const userDest = document.getElementById('userDest');

// if (getToFormBtn) {
// getToFormBtn.addEventListener('click', (event) => {
// event.preventDefault();

// const userDestValue = userDest.value;
// sessionStorage.setItem('destData', userDestValue);

// sessionStorage.setItem('productName', productName);
// sessionStorage.setItem('productPrice', productPrice);

// // move session storage data into the shipping info fields
// if (productName && productPrice && userDestValue) {
// window.location.href = '/shipping-info';
// } else
// console.log(
// 'product price, product name, and userdest not available'
// );
// });
// } else console.log('get to form button is not on this page');
// }

// gotoNextPage();
// }
// }
