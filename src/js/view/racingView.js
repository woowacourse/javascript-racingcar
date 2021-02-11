import { globalAttr, selectors } from '../keys.js';
import { $ } from '../utils.js';

const toggleDisplayCountView = function () {
	$(selectors.racingContainer).classList.toggle(globalAttr.displayNoneClass);
};

export const addSpinners = function () {
	const $racingCarsAreaElement = $(selectors.racingCarsArea);
	$racingCarsAreaElement.childNodes.forEach((carElement) => {
		const spinnerElement = carElement.querySelector('.spinner-container');
		if (spinnerElement) return;
		carElement.innerHTML += `<div class="d-flex justify-center mt-4">
		<div class="relative spinner-container">
		  <span class="material spinner"></span>
		</div>
	  </div>`;
	});
};

export const removeSpinners = function () {
	const $racingCarsAreaElement = $(selectors.racingCarsArea);
	$racingCarsAreaElement.childNodes.forEach((carElement) => {
		const spinnerElement = carElement.querySelector('.spinner-container');
		if (spinnerElement) carElement.removeChild(spinnerElement.parentNode);
	});
};

export const displayRacingCars = function (cars) {
	const classes = [globalAttr.carPlayerClass, globalAttr.marginTop(2)];
	cars.forEach((car) => {
		$(selectors.racingCarsArea).innerHTML += `<div>
      <div class=${classes.join(' ')}>${car.name}</div>
    </div>`;
	});
	toggleDisplayCountView();
};

export const appendArrowElement = function (carElement) {
	const arrowElement = document.createElement('div');
	const carNameElement = carElement.querySelector(selectors.carPlayer);
	const classes = [globalAttr.forwardIconClass, globalAttr.marginTop(2)];
	arrowElement.classList.add(...classes);
	arrowElement.innerText = '⬇️';
	carNameElement.after(arrowElement);
};

export const initializeRacingView = function () {
	toggleDisplayCountView();
	$(selectors.racingCarsArea).innerHTML = '';
};
