import { app } from "../index.js";
import { displayArrow } from "../view/racingView.js";
import { getRandomNumber } from "./utils.js";
import { chooseWinners } from "./winnerController.js";

// refactor : 함수명 확인
export const gameStart = function (count) {
  const racingCarElements = document.querySelector("#racing-cars");

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
