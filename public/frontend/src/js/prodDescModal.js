//? popping up the product desciption modal

// fetching the product id of the rendered product
const renderedProdId = sessionStorage.getItem('productId');
const productContainer = document.getElementById('product-container');
const closeBtn = document.querySelector('.modal-close-btn');
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
const prodDescModal = document.querySelector('.prodDescModal');
const contentContainer = document.querySelector('.content');

document.addEventListener('DOMContentLoaded', () => {
	// Fetch JSON product data
	const url = '/frontend/json/product-data.json';

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			for (let i = 0; i < learnMoreBtns.length; i++) {
				const lmButton = learnMoreBtns[i];
				const prodId = data.products[i].id;

				// Assign the product id to the button
				lmButton.dataset.prodId = prodId;

				// Find the product in the data array that matches the prodId
				const product = data.products.find((product) => product.id === prodId);

				lmButton.addEventListener('click', (event) => {
					event.preventDefault();

					// console.log(product);

					if (product) {
						prodDescModal.style.display = 'block';

						const prodDescTemplate = `
							<section class="product-description">
								<div class="container">
									<h3 class="text-heading">${product.name}</h3>

									<!-- introduction -->
									<div class="wrap">
										<p>${
											product.introduction[0] !== undefined
												? `<p>${product.introduction[0]}</p>`
												: ''
										}</p>

										<p>${
											product.introduction[1] !== undefined
												? `<p>${product.introduction[1]}</p>`
												: ''
										}</p>

										<p>${
											product.introduction[2] !== undefined
												? `<p>${product.introduction[2]}</p>`
												: ''
										}</p>

										<p>${
											product.introduction[3] !== undefined
												? `<p>${product.introduction[3]}</p>`
												: ''
										}</p>

										<p>${
											product.introduction[4] !== undefined
												? `<p>${product.introduction[4]}</p>`
												: ''
										}</p>
									</div>

									<!-- pharmacology -->
									<div class="wrap">
										<p>${
											product.pharmacology[0] !== undefined
												? `<p>${product.pharmacology[0]}</p>`
												: ''
										}</p>

										<p>${
											product.pharmacology[1] !== undefined
												? `<p>${product.pharmacology[1]}</p>`
												: ''
										}</p>

										<p>${
											product.pharmacology[2] !== undefined
												? `<p>${product.pharmacology[2]}</p>`
												: ''
										}</p>

										<p>${
											product.pharmacology[3] !== undefined
												? `<p>${product.pharmacology[3]}</p>`
												: ''
										}</p>

										<p>${
											product.pharmacology[4] !== undefined
												? `<p>${product.pharmacology[4]}</p>`
												: ''
										}</p>

										<p>${
											product.pharmacology[5] !== undefined
												? `<p>${product.pharmacology[5]}</p>`
												: ''
										}</p>

										<p>${
											product.pharmacology[6] !== undefined
												? `<p>${product.pharmacology[6]}</p>`
												: ''
										}</p>
									</div>
									<!-- end of pharmacology -->

									<!-- health benefits -->
									<div class="wrap">
										<ul>
											<li>${
												product.health_benefits[0] !== undefined
													? `<p class="description-text">${product.health_benefits[0]}</p>`
													: ''
											}</li>
											<li>${
												product.health_benefits[1] !== undefined
													? `<p class="description-text">${product.health_benefits[1]}</p>`
													: ''
											}</li>
											<li>${
												product.health_benefits[2] !== undefined
													? `<p class="description-text">${product.health_benefits[2]}</p>`
													: ''
											}</li>
											<li>${
												product.health_benefits[3] !== undefined
													? `<p class="description-text">${product.health_benefits[3]}</p>`
													: ''
											}</li>
											<li>${
												product.health_benefits[4] !== undefined
													? `<p class="description-text">${product.health_benefits[4]}</p>`
													: ''
											}</li>
											<li>${
												product.health_benefits[5] !== undefined
													? `<p class="description-text">${product.health_benefits[5]}</p>`
													: ''
											}</li>
											<li>${
												product.health_benefits[6] !== undefined
													? `<p class="description-text">${product.health_benefits[6]}</p>`
													: ''
											}</li>
											<li>${
												product.health_benefits[7] !== undefined
													? `<p class="description-text">${product.health_benefits[7]}</p>`
													: ''
											}</li>
											<li>${
												product.health_benefits[8] !== undefined
													? `<p class="description-text">${product.health_benefits[8]}</p>`
													: ''
											}</li>
											<li>${
												product.health_benefits[9] !== undefined
													? `<p class="description-text">${product.health_benefits[9]}</p>`
													: ''
											}</li>
											<li>${
												product.health_benefits[10] !== undefined
													? `<p class="description-text">${product.health_benefits[10]}</p>`
													: ''
											}</li>
											<li>${
												product.health_benefits[11] !== undefined
													? `<p class="description-text">${product.health_benefits[11]}</p>`
													: ''
											}</li>
											<li>${
												product.health_benefits[12] !== undefined
													? `<p class="description-text">${product.health_benefits[12]}</p>`
													: ''
											}</li>
										</ul>									
									</div>
									<!-- end of health benefits -->

									<!-- active ingredients -->
									<div class="wrap">
										<ul>
											<li>${
												product.active_ingredients[0] !== undefined
													? `<p class="description-text">${product.active_ingredients[0]}</p>`
													: ''
											}</li>
											<li>${
												product.active_ingredients[1] !== undefined
													? `<p class="description-text">${product.active_ingredients[1]}</p>`
													: ''
											}</li>
											<li>${
												product.active_ingredients[2] !== undefined
													? `<p class="description-text">${product.active_ingredients[2]}</p>`
													: ''
											}</li>
										</ul>
									</div>
									<!-- end of active ingredients -->

									<!-- pack size -->
									<div class="wrap">
										<p>${product.pack_size !== undefined ? `<p>${product.pack_size}</p>` : ''}</p>
									</div>
									<!-- end of pack size -->

									<!-- dosage form composition -->
									<div class="wrap">
										<p>${
											product.dosage_form_compoisition !== undefined
												? `<p>${product.dosage_form_composition}</p>`
												: ''
										}</p>
									</div>
									<!-- end of dosage form composition -->

									<!-- therapeutic class -->
									<div class="wrap">
										<p>${
											product.therapeutic_class !== undefined
												? `<p>${product.therapeutic_class}</p>`
												: ''
										}</p>
									</div>
									<!-- end of therapeutic class -->

									<!-- dosage administration -->
									<div class="wrap">
										<p>${
											product.dosage_administration !== undefined
												? `<p>${product.dosage_administration}</p>`
												: ''
										}</p>
									</div>
									<!-- end of dosage administration -->

									<!-- directions for use -->
									<div class="wrap">
										<ul>
											<li>${
												product.direction_for_use[0] !== undefined
													? `<p class="description-text">${product.direction_for_use[0]}</p>`
													: ''
											}</li>
											<li>${
												product.direction_for_use[1] !== undefined
													? `<p class="description-text">${product.direction_for_use[1]}</p>`
													: ''
											}</li>
											<li>${
												product.direction_for_use[2] !== undefined
													? `<p class="description-text">${product.direction_for_use[2]}</p>`
													: ''
											}</li>
										</ul>
									</div>
									<!-- end of directions for use -->

									<!-- indications -->
									<div class="wrap">
										<p>${
											product.indications !== undefined
												? `<p>${product.indications}</p>`
												: ''
										}</p>
									</div>
									<!-- end of indications -->

									<!-- contraindications -->
									<div class="wrap">
										<p>${
											product.contraindications !== undefined
												? `<p>${product.contraindications}</p>`
												: ''
										}</p>
									</div>
									<!-- end of contraindications -->

									<!-- precautions and warnings -->
									<div class="wrap">
										<p>${
											product.precautions_warnings !== undefined
												? `<p>${product.precautions_warnings}</p>`
												: ''
										}</p>
									</div>
									<!-- end of precautions and warnings -->

									<!-- adverse effects and reactions -->
									<div class="wrap">
										<p>${
											product.adverse_effects_reactions !== undefined
												? `<p>${product.adverse_effects_reactions}</p>`
												: ''
										}</p>
									</div>
									<!-- end of adverse effects and reactions -->

									<!-- reg number -->
									<div class="wrap">
										<h4 class="heading">NAFDAC reg no:</h4>

										<p>${product.reg_no !== undefined ? `<p>${product.reg_no}</p>` : ''}</p>
									</div>
									<!-- reg number -->

									<!-- storage_condition -->
									<div class="wrap">
										<h4 class="heading">Storage condition:</h4>

										<p>${
											product.storage_condition !== undefined
												? `<p>${product.storage_condition}</p>`
												: ''
										}</p>
									</div>
									<!-- end of storage condition -->

									<!-- shelf life -->
									<div class="wrap">
										<h4 class="heading">Shelf life:</h4>

										<p>${product.shelf_life !== undefined ? `<p>${product.shelf_life}</p>` : ''}</p>
									</div>
									<!-- end of shelf life -->

								</div>
							</section>
						`;

						contentContainer.innerHTML = prodDescTemplate;
					} else console.log('this product is not here');
				});
			}
		});
});

closeBtn.addEventListener('click', () => {
	// console.log('Close button clicked');

	prodDescModal.style.display = 'none';
});
