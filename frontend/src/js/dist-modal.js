const nigeriaBtn = document.getElementById('ng-btn');
const ghanaBtn = document.getElementById('gh-btn');
const usBtn = document.getElementById('us-btn');
const togoBtn = document.getElementById('togo-btn');
const ivoryCoastBtn = document.getElementById('iv-btn');
const ukBtn = document.getElementById('uk-btn');
const camBtn = document.getElementById('cameroon-btn');
const LibBtn = document.getElementById('lib-btn');

const genBtn = document.querySelectorAll('.click-btn');
const modal = document.querySelector('.dist-modal');
const modalContainer = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const distUrl = '/frontend/json/distributor-data.json';

const checkBtnClicked = () => {
	for (let i = 0; i < genBtn.length; i++) {
		genBtn[i].addEventListener('click', (e) => {
			const clickedBtn = e.target;
			const buttonId = clickedBtn.id;

			console.log(buttonId);

			let countryName;

			switch (buttonId) {
				case 'ng-btn':
					countryName = 'Nigeria';
					break;
				case 'gh-btn':
					countryName = 'Ghana';
					break;
				case 'us-btn':
					countryName = 'USA';
					break;
				case 'cameroon-btn':
					countryName = 'Cameroon';
					break;
				case 'lib-btn':
					countryName = 'Liberia';
					break;
				case 'togo-btn':
					countryName = 'Togo';
					break;
				case 'iv-btn':
					countryName = 'Ivory Coast';
					break;
				case 'uk-btn':
					countryName = 'UK';
					break;
				default:
					break;
			}

			if (countryName) {
				fetch(distUrl)
					.then((response) => response.json())
					.then((data) => {
						const countryDistributors = data.distributors.filter(
							(distributor) => distributor.country === countryName
						);

						if (countryDistributors.length > 0) {
							const modalContent = countryDistributors
								.map(
									(distributor) => `
                    <div class="content-wrap">
                      <h3 class="dist-name">${distributor.name}</h3>
                      <div class="sub-elements">
											<p>Phone: ${distributor.phone}</p>
                      <p>Address: ${distributor.address}</p>
											</div>
											<div class="call-wrap">
												<a class="dist-call-btn" href="tel:${distributor.callLine}"><i class="fa-solid fa-phone"></i> <span class="link-span">Call Distributor</span></a>
											</div>
                    </div>
                  `
								)
								.join('');

							modalContainer.innerHTML = modalContent;
							modal.style.display = 'block';

							modalCloseBtn.addEventListener('click', () => {
								modal.style.display = 'none';
							});
						} else {
							console.log(`No distributors found for ${countryName}`);
						}
					});
			}
		});
	}
};

checkBtnClicked();
