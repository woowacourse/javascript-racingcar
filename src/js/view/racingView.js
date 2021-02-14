import { GLOBAL_ATTR, SELECTOR, GLOBAL_HTML_TEMPLATE } from '../keys.js';
import { $ } from '../utils.js';

const toggleDisplayCountView = function () {
	$(SELECTOR.RACING_CONTAINER).classList.toggle(
		GLOBAL_ATTR.CLASS_DISPLAY_NONE,
	);
};

export const addSpinners = function () {
	const $racingCarsAreaElement = $(SELECTOR.RACING_CARS_AREA);
	$racingCarsAreaElement.childNodes.forEach((carElement) => {
		const spinnerElement = carElement.querySelector(
			SELECTOR.SPINNER_CONTAINER,
		);
		if (spinnerElement) return;
		carElement.innerHTML += GLOBAL_HTML_TEMPLATE.SPINNER;
	});
};

export const removeSpinners = function () {
	const $racingCarsAreaElement = $(SELECTOR.RACING_CARS_AREA);
	$racingCarsAreaElement.childNodes.forEach((carElement) => {
		const spinnerElement = carElement.querySelector(
			SELECTOR.SPINNER_CONTAINER,
		);
		if (spinnerElement) carElement.removeChild(spinnerElement.parentNode);
	});
};

export const displayRacingCars = function (cars) {
	const classes = [
		GLOBAL_ATTR.CLASS_CAR_PLAYER,
		GLOBAL_ATTR.GET_CLASS_MARGIN_TOP(2),
	];
	cars.forEach((car) => {
		$(
			SELECTOR.RACING_CARS_AREA,
		).innerHTML += GLOBAL_HTML_TEMPLATE.GET_CAR_PLAYER(classes, car);
	});
	toggleDisplayCountView();
};

export const appendArrowElement = function (carElement) {
	const arrowElement = document.createElement('div');
	const carNameElement = carElement.querySelector(SELECTOR.CAR_PLAYER);
	const classes = [
		GLOBAL_ATTR.CLASS_FORWARD_ICON,
		GLOBAL_ATTR.GET_CLASS_MARGIN_TOP(2),
	];
	arrowElement.classList.add(...classes);
	arrowElement.innerText = '⬇️';
	carNameElement.after(arrowElement);
};

export const initializeRacingView = function () {
	toggleDisplayCountView();
	$(SELECTOR.RACING_CARS_AREA).innerHTML = '';
};
