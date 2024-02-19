// currency conversion logic starts here******

// user location modal logic - istening for where the customer is coming from
const userLocation = document.querySelectorAll('.country-btn'); // to initialize the close button functionality when the buttons are clicked
const userLocationModal = document.querySelector('.user-location-modal');

// init the regions
const usRegion = document.querySelectorAll('.dollar-country'); // array of countries
const naija = document.querySelector('.naira-country');
const ghanaCedis = document.querySelector('.cedis-country');
const englishRegion = document.querySelector('.pound-country');
const euroRegion = document.querySelector('.euro-country');

// init product currency and amount elements
const amount = document.querySelectorAll('.amount');
const currency = document.querySelectorAll('.currency');

const hideForUsRegions = () => {
	for (let i = 0; i < usRegion.length; i++) {
		usRegion[i].addEventListener('click', () => {
			for (let i = 0; i < currency.length; i++) {
				currency[i].textContent = '$';

				const amountIndollar = parseInt(amount[i].textContent);
				const countryRate = 1;
				userLocationModal.style.display = 'none';

				const forex = amountIndollar * countryRate;

				amount[i].textContent = Math.round(forex);

				const amountInNums = parseInt(amount[i].textContent);
				console.log(typeof amountInNums, amountInNums);

				localStorage.setItem('modalShownForUs', true);

				localStorage.setItem('selectedCurrency', currency[i].textContent);

				localStorage.getItem('selectedCurrency');
			}
		});
	}
};

hideForUsRegions();

// naira currency conversion  function
const nairaCurrencyConvert = () => {
	if (naija) {
		naija.addEventListener('click', () => {
			for (let i = 0; i < currency.length; i++) {
				currency[i].textContent = 'N';

				console.log(amount[i].textContent);

				const amountIndollar = parseInt(amount[i].textContent);
				const countryRate = 819.99;
				const forex = amountIndollar * countryRate;

				amount[i].textContent = Math.round(forex);

				console.log(forex);

				const amountInNums = parseInt(amount[i].textContent);
				// console.log(typeof amountInNums, amountInNums);

				userLocationModal.style.display = 'none';

				localStorage.setItem('modalShownForNigeria', true);

				localStorage.setItem('selectedCurrency', currency[i].textContent);

				localStorage.getItem('selectedCurrency');
			}
		});
	}
};

nairaCurrencyConvert();
// end of naira conversion function

// ghana cedis currency conversion function
const cedisCurrencyConversion = () => {
	if (ghanaCedis) {
		ghanaCedis.addEventListener('click', () => {
			for (let i = 0; i < currency.length; i++) {
				currency[i].textContent = 'GH₵';

				const amountIndollar = parseInt(amount[i].textContent);
				const countryRate = 11.25;
				const forex = amountIndollar * countryRate;

				amount[i].textContent = Math.round(forex);

				userLocationModal.style.display = 'none';

				localStorage.setItem('modalShownForGhana', true);

				localStorage.setItem('selectedCurrency', currency[i].textContent);

				localStorage.getItem('selectedCurrency');
			}
		});
	}
};

cedisCurrencyConversion();
// end of ghana cedis conversion function

// uk currency conversion function
const ukCurrencyConversion = () => {
	if (englishRegion) {
		englishRegion.addEventListener('click', () => {
			for (let i = 0; i < currency.length; i++) {
				currency[i].textContent = '£';

				const amountIndollar = parseInt(amount[i].textContent); //official amount for the products
				const countryRate = 0.79; // local currency converted against the official product amount
				const forex = amountIndollar * countryRate;

				amount[i].textContent = Math.round(forex);

				userLocationModal.style.display = 'none';

				localStorage.setItem('modalShownForUk', true);

				localStorage.setItem('selectedCurrency', currency[i].textContent);

				localStorage.getItem('selectedCurrency');
			}
		});
	}
};

ukCurrencyConversion();
// end of uk conversion function

if (localStorage.getItem('modalShownForNigeria')) {
	for (let i = 0; i < amount.length; i++) {
		currency[i].textContent = 'N';

		const amountIndollar = parseInt(amount[i].textContent);
		const countryRate = 819.99;
		const forex = amountIndollar * countryRate;

		amount[i].textContent = Math.round(forex);

		userLocationModal.style.display = 'none';
	}
} else if (localStorage.getItem('modalShownForGhana')) {
	for (let i = 0; i < amount.length; i++) {
		currency[i].textContent = 'GH₵';

		const amountIndollar = parseInt(amount[i].textContent);
		const countryRate = 11.25;
		const forex = amountIndollar * countryRate;

		amount[i].textContent = Math.round(forex);

		userLocationModal.style.display = 'none';
	}
} else if (localStorage.getItem('modalShownForUk')) {
	for (let i = 0; i < amount.length; i++) {
		currency[i].textContent = '£';

		const amountIndollar = parseInt(amount[i].textContent); //official amount for the products
		const countryRate = 0.91; // local currency converted against the official product amount
		const forex = amountIndollar * countryRate;

		amount[i].textContent = Math.round(forex);

		userLocationModal.style.display = 'none';
	}
} else if (localStorage.getItem('modalShownForUs')) {
	userLocationModal.style.display = 'none';
}

// currency conversion logic ends here********************************************************************************************************************************************************************

// cart logic starts here ************************************************************************************************************

const cartBtn = document.getElementById('cart-btn');
const cart = document.querySelector('.cart-modal-box');
const cartCloseBtn = document.querySelector('.cart-close-btn');
const productCartContent = document.querySelector('.product-content');
const emptyCart = document.querySelector('.emptycart-msg');
const cartDot = document.querySelector('.cart-indicator');

// Iterate over the order buttons using a for loop
const addToCartBtn = document.querySelectorAll('.add-to-cart-btn');

const storedCurrency = localStorage.getItem('selectedCurrency');

const selectedCurrency = storedCurrency;

const nairaExchangeRate = 819.99; // naira
const ukExchangeRate = 0.79; // pounds
const ghExchangeRate = 11.25; // cedis

let totalAmount = document.querySelector('.total-amount');

cartBtn.addEventListener('click', () => {
	cart.style.display = 'block';
});

// Rest of your code...
if (cartCloseBtn) {
	cartCloseBtn.addEventListener('click', () => {
		cart.style.display = 'none';
	});
}

document.addEventListener('DOMContentLoaded', () => {
	// Fetch JSON product data
	const url = '/frontend/json/product-data.json';

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			// Retrieve the cart items from localStorage
			let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

			// Update the cart template based on the retrieved cart items
			updateCartTemplate(cartItems);

			for (let i = 0; i < addToCartBtn.length; i++) {
				const button = addToCartBtn[i];
				const prodId = data.products[i].id;

				// Assign the product id to the button
				button.dataset.prodId = prodId;

				button.addEventListener('click', () => {
					const productId = button.dataset.prodId;
					const product = data.products.find((item) => item.id === productId);

					// Add the product to the cart
					addToCart(product);
					alert('product added to cart');

					// Update the cart template with the updated cart items
					updateCartTemplate(cartItems);

					// Store the updated cart items in localStorage
					localStorage.setItem('cartItems', JSON.stringify(cartItems));
				});

				function addToCart(product) {
					// Check if the product already exists in the cart
					const existingProduct = cartItems.find(
						(item) => item.id === product.id
					);

					if (existingProduct) {
						// If the product exists, update its quantity
						existingProduct.quantity += 1;
					} else {
						// If the product doesn't exist, add it to the cart
						product.quantity = 1;
						cartItems.push(product);
					}
				}
			}
		})
		.catch((error) => {
			console.error('Error:', error);
		});

	function updateCartTemplate(cartItems) {
		// cart container nodes below

		// cart products container
		const productCartContent = document.querySelector('.product-content');

		// total amount element
		const totalAmountElement = document.querySelector('.total-amount');

		// Clear the existing cart items
		productCartContent.innerHTML = '';

		const emptyCartMessage = document.createElement('p');

		if (cartItems.length === 0) {
			// If no products in the cart, display a message or default content

			emptyCartMessage.textContent = 'Your cart is empty.';
			productCartContent.appendChild(emptyCartMessage);

			// Hide the red dot on the cart button
			cartDot.style.display = 'none';
		} else {
			const productsLog = []; // Step 1: Declare an empty array

			// Generate the cart template based on the cart items
			cartItems.forEach((product, index) => {
				const cartItem = document.createElement('div');
				cartDot.style.display = ' block';
				// cart.style.display = 'block';

				// Define a variable to hold the calculated amount
				let calculatedAmount;

				// Perform the calculation based on the currency value using a switch statement
				switch (selectedCurrency) {
					case 'N':
						calculatedAmount =
							`${product.price}` * Math.round(nairaExchangeRate);
						break;

					case '£':
						calculatedAmount =
							`${product.price}` * Math.round(ukExchangeRate) - 1;
						break;
					case 'GH₵':
						calculatedAmount =
							`${product.price}` * Math.round(ghExchangeRate) - 1;
						break;
					default:
						calculatedAmount = `${product.price}`;
				}

				cartItem.innerHTML = `
          <section class="product-wrap">
            <div class="wrap">
              <div class="img-wrap">
                <img src="${product.productImage}">
              </div>

              <div class="product-info">
                <h4 class="product-name">${product.name}</h4>
								<p class="product-price">${selectedCurrency}${calculatedAmount}</p>

                <span class="quauntity-wrap">
                  <button class="sub">-</button>
                  <input class="prod-quantity" value="${product.quantity}">
                  <button class="add">+</button>
                </span>
              </div>
            </div>

            <div class="bin-wrap">
              <i class="fa-solid fa-trash"></i>
            </div>
          </section>
        `;
				productCartContent.appendChild(cartItem);

				// map the products and items in the cart since they are an array
				const productsIntoStrings = cartItems.map((product) => {
					return `${product.name}`;
				});

				// // convert them into a string
				const orderedProducts = JSON.stringify(productsIntoStrings); //the stringified array items are stored in sessionStorage in the moveToNextPage() function by a click event
				// console.log(orderedProducts);

				// we are also storing the total amount that customer is paying for in sessionStorage in the calculateTotalAmount() function

				// console.log(typeof orderedProducts);
				// end of array.map() for the items in the cart

				const quantityInput = cartItem.querySelector('input');
				const subtractBtn = cartItem.querySelector('.sub');
				const addBtn = cartItem.querySelector('.add');
				let prodQuantity = document.querySelector('.prod-quantity');

				// console.log(prodQuantity.value);

				subtractBtn.addEventListener('click', () => {
					// Decrease the quantity by 1
					if (product.quantity > 1) {
						product.quantity -= 1;
						quantityInput.value = product.quantity;
						updateCartItems(cartItems);
						calculateTotalAmount(cartItems);
					}
				});

				addBtn.addEventListener('click', () => {
					// Increase the quantity by 1
					product.quantity += 1;
					quantityInput.value = product.quantity;
					updateCartItems(cartItems);
					calculateTotalAmount(cartItems);
				});

				const itemDeleteBtn = cartItem.querySelector('.bin-wrap');

				itemDeleteBtn.addEventListener('click', (e) => {
					// Remove the product from the cartItems array at the corresponding index
					cartItems.splice(index, 1);

					// Store the updated cart items in localStorage
					localStorage.setItem('cartItems', JSON.stringify(cartItems));

					// Update the cart template with the updated cart items
					updateCartTemplate(cartItems);
					calculateTotalAmount(cartItems);

					// Update sessionStorage with the updated cartItems
					// sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

					// Refresh the page
					location.reload();
					window.location.href = '/product#product-section';

					// const productNameField = document.getElementById('name');

					// console.log(
					// 	`Product: ${product.name}, Quantity: ${product.quantity}`
					// );
				});

				console.log(`Product: ${product.name}, Quantity: ${product.quantity}`);

				// Calculate the total amount
				calculateTotalAmount(cartItems);

				// cart checkout button
				const cartCheckoutBtn = document.getElementById('cart-checkout');

				// console.log(cartItems);
				// event listener for the cart checkout button
				const moveDataToNextPage = () => {
					cartCheckoutBtn.addEventListener('click', () => {
						if (!cartItems) {
							console.log('your cart is empty');
						} else {
							sessionStorage.setItem(
								'productItem',
								process.env.PAYMENT_API_KEY
							);

							// Step 2: Push the product name and updated quantity to productsLog array
							productsLog.push({
								name: product.name,
								quantity: product.quantity,
							});

							// Step 3: Convert the productsLog array to JSON string
							const productsLogString = JSON.stringify(productsLog);

							// console.log(productsLogString);

							// Step 4: Store the JSON string in sessionStorage
							sessionStorage.setItem('loggedProducts', productsLogString);

							console.log(productsLogString);

							window.location.href = '/shipping-info';
							console.log('button clicked!');
						}
					});
				};

				moveDataToNextPage();
			});
		}

		function updateCartItems(cartItems) {
			cartItems.forEach((product, index) => {
				const quantityInput =
					document.querySelectorAll('.prod-quantity')[index];
				quantityInput.value = product.quantity;
			});
		}

		function calculateTotalAmount(cartItems) {
			let totalAmount = 0;

			cartItems.forEach((product) => {
				// Perform the calculation based on the currency value using a switch statement
				let calculatedAmount;

				switch (selectedCurrency) {
					case 'N':
						calculatedAmount =
							`${product.price}` * Math.round(nairaExchangeRate);
						break;

					case '£':
						calculatedAmount =
							`${product.price}` * Math.round(ukExchangeRate) - 1;
						break;
					case 'GH₵':
						calculatedAmount =
							`${product.price}` * Math.round(ghExchangeRate) - 1;
						break;
					default:
						calculatedAmount = `${product.price}`;
				}

				const subtotal = product.quantity * calculatedAmount;
				totalAmount += subtotal;
			});

			// Update the total amount element on the page

			totalAmountElement.textContent = `${selectedCurrency} ${totalAmount.toFixed(
				2
			)}`;

			// we store the total amount in session storage so that we can access them in the next page for payment processing
			sessionStorage.setItem('total', totalAmount);
			// sessionStorage.setItem('updatedOrder');
		}
	}
});

// making the home page featured products clickable
const productBtns = document.querySelectorAll('.product-btn');

productBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		window.location.href = '/product#product-section';
	});
});
