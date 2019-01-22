document.addEventListener('DOMContentLoaded', () => {
	togglePaints();
});

//Function for toggle paints
function togglePaints() {
	let pageElements = document.querySelectorAll('.header__info--link, #checkboxBtn, #first-paint, #second-paint'); //Gett all el.

	pageElements[1].addEventListener('click', (event) => {
		//If checkbox is checked
		if (event.target.checked) {
			pageElements[1].setAttribute('checked', true); //Checkbox
			//Header link
			pageElements[0].setAttribute('href', 'https://www.piet-mondrian.org/composition-ii-in-red-blue-and-yellow.jsp'); //Link href
			pageElements[0].text = 'Composition II in Red, Blue, and Yellow, 1929'; //Link text
			pageElements[2].classList.add('close'); //First (default) paint
			pageElements[3].classList.remove('close'); //Second paint
		} else {
			pageElements[1].setAttribute('checked', false); //Checkbox
			//Header link
			pageElements[0].setAttribute('href', 'https://www.piet-mondrian.org/composition-with-large-red-plane-yellow-black-gray-and-blue.jsp');
			pageElements[0].text = 'Composition with Large Red Plane, Yellow, Black, Gray, and Blue, 1921'; //Link text
			pageElements[3].classList.add('close'); //First (default) paint
			pageElements[2].classList.remove('close'); //Second paint
		}
	});
}