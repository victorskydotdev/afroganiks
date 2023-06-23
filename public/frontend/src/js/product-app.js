//? this logic is for the product page

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

				sessionStorage.setItem('modalShownForUs', true);

				sessionStorage.setItem('selectedCurrency', currency[i].textContent);

				sessionStorage.getItem('selectedCurrency');
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

				const amountIndollar = parseInt(amount[i].textContent);
				const countryRate = 819.99;
				const forex = amountIndollar * countryRate;

				amount[i].textContent = Math.round(forex);

				const amountInNums = parseInt(amount[i].textContent);
				console.log(typeof amountInNums, amountInNums);

				userLocationModal.style.display = 'none';

				sessionStorage.setItem('modalShownForNigeria', true);

				sessionStorage.setItem('selectedCurrency', currency[i].textContent);

				sessionStorage.getItem('selectedCurrency');
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

				sessionStorage.setItem('modalShownForGhana', true);

				sessionStorage.setItem('selectedCurrency', currency[i].textContent);

				sessionStorage.getItem('selectedCurrency');
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

				sessionStorage.setItem('modalShownForUk', true);

				sessionStorage.setItem('selectedCurrency', currency[i].textContent);

				sessionStorage.getItem('selectedCurrency');
			}
		});
	}
};

ukCurrencyConversion();
// end of uk conversion function

// euro currency conversion function
// const euroCurrencyConversion = () => {
// 	if (euroRegion) {
// 		euroRegion.addEventListener('click', () => {
// 			for (let i = 0; i < currency.length; i++) {
// 				currency[i].textContent = '$';

// 				const amountIndollar = parseInt(amount[i].textContent);
// 				const countryRate = 1;
// 				userLocationModal.style.display = 'none';

// 				const forex = amountIndollar * countryRate;

// 				amount[i].textContent = Math.round(forex);

// 				const amountInNums = parseInt(amount[i].textContent);
// 				console.log(typeof amountInNums, amountInNums);

// 				sessionStorage.setItem('modalShownForUs', true);

// 				sessionStorage.setItem('selectedCurrency', currency[i].textContent);

// 				sessionStorage.getItem('selectedCurrency');
// 			}
// 		});
// 	}
// };
// euroCurrencyConversion();
// end of euro conversion function

//
if (sessionStorage.getItem('modalShownForNigeria')) {
	for (let i = 0; i < amount.length; i++) {
		currency[i].textContent = 'N';

		const amountIndollar = parseInt(amount[i].textContent);
		const countryRate = 819.99;
		const forex = amountIndollar * countryRate;

		amount[i].textContent = Math.round(forex);

		userLocationModal.style.display = 'none';
	}
} else if (sessionStorage.getItem('modalShownForGhana')) {
	for (let i = 0; i < amount.length; i++) {
		currency[i].textContent = 'GH₵';

		const amountIndollar = parseInt(amount[i].textContent);
		const countryRate = 11.25;
		const forex = amountIndollar * countryRate;

		amount[i].textContent = Math.round(forex);

		userLocationModal.style.display = 'none';
	}
} else if (sessionStorage.getItem('modalShownForUk')) {
	for (let i = 0; i < amount.length; i++) {
		currency[i].textContent = '€';

		const amountIndollar = parseInt(amount[i].textContent); //official amount for the products
		const countryRate = 0.91; // local currency converted against the official product amount
		const forex = amountIndollar * countryRate;

		amount[i].textContent = Math.round(forex);

		userLocationModal.style.display = 'none';
	}
} else if (sessionStorage.getItem('modalShownForUs')) {
	userLocationModal.style.display = 'none';
}

//
document.addEventListener('DOMContentLoaded', () => {
	// the code below runs when the dom content is loaded

	// fetch json product data
	const url = '/frontend/json/product-data.json';

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			// Iterate over the order buttons using a for loop
			// console.log(data.products[0]);

			// variable for the order buttons on the product page
			const orderButtons = document.querySelectorAll('.order-btn');

			// loop through the order buttons
			for (let i = 0; i < orderButtons.length; i++) {
				const button = orderButtons[i];
				const prodId = data.products[i].id;

				// next we assign product IDs to the buttons of the corresponding products in our json object, so that we can dynamically render them in the product description page

				// assign the product id to the button
				button.dataset.prodId = prodId;

				button.addEventListener('click', () => {
					// Find the product object with the matching ID in the JSON data
					const productId = button.dataset.prodId;
					const product = data.products.find((item) => item.id === productId);

					// Store the product ID in session storage
					sessionStorage.setItem('productId', productId);

					// this moves the session storage data to the next page so that the script in the next page will fetch and pass it to be utilized
					window.location.href = '/product-description';
				});
			}
		})
		.catch((error) => {
			console.error('Error:', error);
		});
});
