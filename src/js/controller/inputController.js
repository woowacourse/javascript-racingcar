import {
	toggleCarNameInputDisable,
	toggleCountInputDisable,
	toggleDisplayCountView,
} from '../view/inputView.js';
import { app } from '../index.js';
import { alertMsg, bounds, selectors } from '../keys.js';
import { displayRacingCars } from '../view/racingView.js';
import { startRacingGame } from './racingController.js';
import { isNotDuplicatedArray, isAlphanumeric, $ } from '../utils.js';

const isValidCarNames = function (carNamesInput) {
	return (
		isNotDuplicatedArray(carNamesInput) &&
		carNamesInput.every(
			(carName) =>
				bounds.lengthLowerBound <= carName.length &&
				carName.length <= bounds.lengthUpperBound &&
				isAlphanumeric(carName),
		)
	);
};

const getCarNamesInput = function () {
	return $(selectors.carNamesInput)
		.value.split(',')
		.map((e) => e.trim());
};

const isValidCount = function (count) {
	return (
		bounds.countLowerBound <= Number(count) &&
		Number(count) <= bounds.countUpperBound
	);
};

export const handleCarNamesSubmit = function () {
	const carNamesInput = getCarNamesInput();
	if (!isValidCarNames(carNamesInput)) {
		alert(alertMsg.isNotValidCarNames);
		return;
	}
	if (bounds.carNamesUpperBound < carNamesInput.length) {
		alert(alertMsg.isNotValidCarNamesLength);
		return;
	}
	toggleCarNameInputDisable();
	toggleDisplayCountView();
};

export const handleCountSubmit = function () {
	const carNamesInput = getCarNamesInput();
	const countInput = $(selectors.countInput).value;

	if (!isValidCount(countInput)) {
		alert(alertMsg.isNotValidCount);
		return;
	}
	app.addCars(carNamesInput);
	toggleCountInputDisable();
	displayRacingCars(app.cars);
	startRacingGame(countInput);
};
