import { app } from "../index.js";
import { Element, Racing_rule } from "../utils/constants.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import { $, $$ } from "../utils/querySelector.js";
import { sleep } from "../utils/sleep.js";
import { chooseWinners } from "./winnerController.js";

export const startRacingGame = async () => {
  const racingCarElements = $("#racing-container > section > div");

  addSpinner(racingCarElements);
  for (let round = 0; round < Number(app.count); round++) {
    await sleep(Racing_rule.ROUND_TIME);
    playRound(racingCarElements);
  }
  removeSpinner();
  chooseWinners();
};

const playRound = (element) => {
  app.cars.forEach((car, index) => {
    const randomNumber = getRandomNumber();

    if (car.moveForward(randomNumber)) {
      addArrow(element.childNodes[index]);
    }
  });
}

const addArrow = (element) => {
  const arrowElementHTML = `<div class="forward-icon mt-2">⬇️️</div>`;

  element.querySelector(Element.CAR_PLAYER_ID).insertAdjacentHTML("afterend", arrowElementHTML);
};

const addSpinner = (element) => {
  element.childNodes.forEach((playerArea) => {
    playerArea.innerHTML +=
      `<div class="d-flex justify-center mt-4">
        <div class="relative spinner-container">
          <span class="material spinner"></span>
        </div>
      </div>`
  })
}

const removeSpinner = () => {
  const spinerElementsHTML = $$(Element.SPINNER_CONTAINER_ID);

  spinerElementsHTML.forEach((element) => {
    element.parentNode.remove();
  });
}