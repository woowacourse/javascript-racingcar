import { app } from "../index.js";
import { selectors } from "../keys.js";
import { appendArrowElement } from "../view/racingView.js";
import { getRandomNumber } from "../utils.js";
import { chooseWinners } from "./winnerController.js";

const startRound = function($racingCarsAreaElement) {
  app.cars.forEach((car, index) => {
    if (car.moveForward(getRandomNumber())) {
      appendArrowElement($racingCarsAreaElement.childNodes[index]);
    }
  });
}

export const startRacingGame = function (rounds) {
  const $racingCarsAreaElement = document.querySelector(selectors.racingCarsArea);
  while (rounds--) startRound($racingCarsAreaElement);
  chooseWinners();
};
