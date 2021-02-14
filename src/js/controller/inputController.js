import {
	toggleCarNameInputDisable,
	toggleCountInputDisable,
	toggleDisplayCountView,
} from '../view/inputView.js';
import { app } from '../index.js';
import { ALERT_MESSAGE, BOUND, SELECTOR } from '../keys.js';
import { displayRacingCars } from '../view/racingView.js';
import { startRacingGame } from './racingController.js';
import { isNotDuplicatedArray, isAlphanumeric, $ } from '../utils.js';

const isValidCarNames = function (carNamesInput) {
	return (
		isNotDuplicatedArray(carNamesInput) &&
		carNamesInput.every(
			(carName) =>
				BOUND.CAR_NAMES_LENGTH_LOWER_BOUND <= carName.length &&
				carName.length <= BOUND.CAR_NAMES_LENGTH_UPPER_BOUND &&
				isAlphanumeric(carName),
		)
	);
};

const getCarNamesInput = function () {
	return $(SELECTOR.CAR_NAMES_INPUT)
		.value.split(',')
		.map((e) => e.trim());
};

const isValidCount = function (count) {
	return (
		BOUND.COUNT_LOWER_BOUND <= Number(count) &&
		Number(count) <= BOUND.COUNT_UPPER_BOUND
	);
};

export const handleCarNamesSubmit = function () {
	const carNamesInput = getCarNamesInput();
	if (!isValidCarNames(carNamesInput)) {
		alert(ALERT_MESSAGE.NOT_VALID_CARNAMES);
		return;
	}
	if (BOUND.CARS_UPPER_BOUND < carNamesInput.length) {
		alert(ALERT_MESSAGE.NOT_VALID_CARNAMES_LENGTH);
		return;
	}
	toggleCarNameInputDisable();
	toggleDisplayCountView();
};

export const handleCountSubmit = function () {
	const carNamesInput = getCarNamesInput();
	const countInput = $(SELECTOR.COUNT_INPUT).value;

	if (!isValidCount(countInput)) {
		alert(ALERT_MESSAGE.NOT_VALID_COUNT.isNotValidCount);
		return;
	}
	app.addCars(carNamesInput);
	toggleCountInputDisable();
	displayRacingCars(app.cars);
	startRacingGame(countInput);
};
