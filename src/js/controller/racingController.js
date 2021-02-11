import { app } from '../index.js';
import { selectors, bounds } from '../keys.js';
import { addSpinners, appendArrowElement, removeSpinners } from '../view/racingView.js';
import { getRandomNumber, $, sleep } from '../utils.js';
import { chooseWinners } from './winnerController.js';

const startRound = function () {
	app.cars.forEach((car, index) => {
		if (bounds.goOrStopBound <= getRandomNumber()) {
			car.moveForward();
			appendArrowElement($(selectors.racingCarsArea).childNodes[index]);
		}
	});
};

const finishRacingGame = function () {
  removeSpinners();
  chooseWinners();
}

export const startRacingGame = function (rounds) {
	const callback = function () {
    if(rounds-- <= 0){
      requestAnimationFrame(addSpinners);
      sleep(1);
      requestAnimationFrame(finishRacingGame);
      return;
    }
    addSpinners();
	  sleep(1);
		requestAnimationFrame(startRound);
    requestAnimationFrame(callback);
	};
  requestAnimationFrame(callback);
};
