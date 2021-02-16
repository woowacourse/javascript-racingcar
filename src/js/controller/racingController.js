import { app } from "../index.js";
import { RACING_RULE } from "../utils/constants.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import { $ } from "../utils/querySelector.js";
import { sleep } from "../utils/sleep.js";
import { chooseWinners } from "./winnerController.js";

export const startRacingGame = async function () {
  const racingCarElements = $("#racing-container > section > div");

  for (let round = 0; round < Number(app.count); round++) {
    await sleep(RACING_RULE.ROUND_TIME);
    playRound(racingCarElements);
  }

  chooseWinners();
};

const playRound = (racingCarElements) => {
  app.cars.forEach((car, index) => {
    const randomNumber = getRandomNumber();
    if (car.moveForward(randomNumber)) {
      addArrow(racingCarElements.childNodes[index]);
    }
  });
}

const addArrow = function (element) {
  element.innerHTML += `<div class="forward-icon mt-2">⬇️️</div>`;
};
