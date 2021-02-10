import { app } from "../index.js";
import { selectors, bounds } from "../keys.js";
import { appendArrowElement } from "../view/racingView.js";
import { getRandomNumber, $ } from "../utils.js";
import { chooseWinners } from "./winnerController.js";

const startRound = function($racingCarsAreaElement) {
  app.cars.forEach((car, index) => {
    if (bounds.goOrStopBound <= getRandomNumber()) {
      car.moveForward();
      appendArrowElement($racingCarsAreaElement.childNodes[index]);
    }
  });
}

export const startRacingGame = function (rounds) {
  const $racingCarsAreaElement = $(selectors.racingCarsArea);
  while (rounds--) startRound($racingCarsAreaElement);
  chooseWinners();
};
