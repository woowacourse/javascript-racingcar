import { globalAttr, selectors, globalHtmlTemplate } from '../keys.js';
import { $ } from '../utils.js';

const toggleDisplayCountView = function () {
	$(selectors.racingContainer).classList.toggle(globalAttr.displayNoneClass);
};

export const addSpinners = function () {
	const $racingCarsAreaElement = $(selectors.racingCarsArea);
	$racingCarsAreaElement.childNodes.forEach((carElement) => {
		const spinnerElement = carElement.querySelector(selectors.spinnerContainer);
		if (spinnerElement) return;
		carElement.innerHTML += globalHtmlTemplate.spinnerTemplate;
	});
};

export const removeSpinners = function () {
	const $racingCarsAreaElement = $(selectors.racingCarsArea);
	$racingCarsAreaElement.childNodes.forEach((carElement) => {
		const spinnerElement = carElement.querySelector(selectors.spinnerContainer);
		if (spinnerElement) carElement.removeChild(spinnerElement.parentNode);
	});
};

export const displayRacingCars = function (cars) {
	const classes = [globalAttr.carPlayerClass, globalAttr.marginTop(2)];
	cars.forEach((car) => {
		$(selectors.racingCarsArea).innerHTML += globalHtmlTemplate.carPlayerTemplate(classes, car);
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
