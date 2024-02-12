const reviewImage = document.querySelectorAll('.review-image');

const blowupImage = () => {
	for (let i = 0; i < reviewImage.length; i++) {
		reviewImage[i].addEventListener('click', () => {
			console.log('image clicked');
		});
	}
};

blowupImage();
