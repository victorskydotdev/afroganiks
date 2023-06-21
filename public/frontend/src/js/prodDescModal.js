//? popping up the product desciption modal

// fetching the product id of the rendered product
const renderedProdId = sessionStorage.getItem('productId');

// inititializing the product description modal
const prodDescModal = document.querySelector('.prodDescModal');

// fetching where the rendered product description will enter
const contentContainer = document.querySelector('.content');
// console.log(contentContainer);

// parent container to be observed by the mutation observer
const productContainer = document.getElementById('product-container');

// setting up a mutation observer to observe for changes in the DOM to use it in our logic
const mutationObserver = new MutationObserver((entries) => {
	// getting the button element observed
	const learnMoreBtn = document.getElementById('lm-btn');

	if (learnMoreBtn) {
		learnMoreBtn.addEventListener('click', () => {
			prodDescModal.style.display = 'block';

			console.log(learnMoreBtn);

			const productUrl = '/frontend/json/product-data.json';

			fetch(productUrl)
				.then((response) => response.json())
				.then((data) => {
					// Find the product object with the matching ID in the JSON data
					const product = data.products.find(
						(item) => item.id === renderedProdId
					);

					const modalTemplate = `
            <section class="product-description">
              <div class="container">
                <h3 class="text-heading">${product.name}</h3>
              

								<!-- pharmacology -->
								<div class="wrap">
									<h4 class="heading">Pharmacology:</h4>

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

								<!-- active ingredients -->
                <div class="wrap">
									<h4 class="heading">Active Ingredients:</h4>

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
									<h4 class="heading">Pack size:</h4>

									<p>${product.pack_size !== undefined ? `<p>${product.pack_size}</p>` : ''}</p>
								</div>
								<!-- end of pack size -->

								<!-- dosage form composition -->
								<div class="wrap">
									<h4 class="heading">Dosage form composition:</h4>

									<p>${
										product.dosage_form_compoisition !== undefined
											? `<p>${product.dosage_form_composition}</p>`
											: ''
									}</p>
								</div>
								<!-- end of dosage form composition -->

								<!-- therapeutic class -->
								<div class="wrap">
									<h4 class="heading">Therapeutic class:</h4>

									<p>${
										product.therapeutic_class !== undefined
											? `<p>${product.therapeutic_class}</p>`
											: ''
									}</p>
								</div>
								<!-- end of therapeutic class -->

								<!-- dosage administration -->
								<div class="wrap">
									<h4 class="heading">Dosage administation:</h4>

									<p>${
										product.dosage_administration !== undefined
											? `<p>${product.dosage_administration}</p>`
											: ''
									}</p>
								</div>
								<!-- end of dosage administration -->

								<!-- directions for use -->
								<div class="wrap">
									<h4 class="heading">Directions for use:</h4>

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
									<h4 class="heading">Indications:</h4>

									<p>${
										product.indications !== undefined
											? `<p>${product.indications}</p>`
											: ''
									}</p>
								</div>
								<!-- end of indications -->

								<!-- contraindications -->
								<div class="wrap">
									<h4 class="heading">Contra-indications:</h4>

									<p>${
										product.contraindications !== undefined
											? `<p>${product.contraindications}</p>`
											: ''
									}</p>
								</div>
								<!-- end of contraindications -->

								<!-- precautions and warnings -->
								<div class="wrap">
									<h4 class="heading">Precautions/warnings:</h4>

									<p>${
										product.precautions_warnings !== undefined
											? `<p>${product.precautions_warnings}</p>`
											: ''
									}</p>
								</div>
								<!-- end of precautions and warnings -->

								<!-- adverse effects and reactions -->
								<div class="wrap">
									<h4 class="heading">Adverse effects/reactions:</h4>

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

					contentContainer.innerHTML = modalTemplate;
				});
		});

		mutationObserver.disconnect();
	} else {
		console.log('nothing is being observed');
	}
});

mutationObserver.observe(productContainer, { childList: true });
