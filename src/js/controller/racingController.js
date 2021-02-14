import { app } from '../index.js';
import { SELECTOR, BOUND } from '../keys.js';
import {
	addSpinners,
	appendArrowElement,
	removeSpinners,
} from '../view/racingView.js';
import { getRandomNumber, $, sleep } from '../utils.js';
import { chooseWinners } from './winnerController.js';

const startRound = function () {
	app.cars.forEach((car, index) => {
		if (BOUND.THRESH_GOING <= getRandomNumber()) {
			car.moveForward();
			appendArrowElement($(SELECTOR.RACING_CARS_AREA).childNodes[index]);
		}
	});
};

const finishRacingGame = function () {
	removeSpinners();
	chooseWinners();
};

export const startRacingGame = function (rounds) {
	const gameRafCallback = async function () {
		try {
			if (rounds-- <= 0) {
				requestAnimationFrame(addSpinners);
				await sleep(1);
				requestAnimationFrame(finishRacingGame);
				return;
			}
			addSpinners();
			await sleep(0);
			requestAnimationFrame(startRound);
			requestAnimationFrame(gameRafCallback);
		} catch (error) {
			alert(error.message);
		}
	};

	requestAnimationFrame(gameRafCallback);
};
