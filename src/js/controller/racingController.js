import { app } from "../index.js";
import { RACING_RULE } from "../utils/constants.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import { $ } from "../utils/querySelector.js";
import { sleep } from "../utils/sleep.js";
import { chooseWinners } from "./winnerController.js";

export const startRacingGame = async function () {
  const racingCarElements = $("#racing-container > section > div");

  addSpinner(racingCarElements);
  for (let round = 0; round < Number(app.count); round++) {
    await sleep(RACING_RULE.ROUND_TIME);
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

const addArrow = function (element) {
  const arrowElementHTML = `<div class="forward-icon mt-2">⬇️️</div>`;

  element.querySelector(".car-player").insertAdjacentHTML("afterend", arrowElementHTML);
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
  const spinerElementsHTML = document.querySelectorAll(".spinner-container");

  console.log(spinerElementsHTML);
  spinerElementsHTML.forEach((element) => {
    element.parentNode.remove();
  });
}