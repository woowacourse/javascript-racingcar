import { app } from "../index.js";
import { displayArrow } from "../view/racingView.js";
import { getRandomNumber, $ } from "./utils.js";
import { chooseWinners } from "./winnerController.js";

export const startRacingGame = function (count) {
  const racingCarElements = $("#racing-container > section > div");

  for (let round = 0; round < Number(count); round++) {
    app.cars.forEach((car, index) => {
      const randomNumber = getRandomNumber();
      if (car.moveForward(randomNumber)) {
        displayArrow(racingCarElements.childNodes[index]);
      }
    });
  }

  chooseWinners();
};
