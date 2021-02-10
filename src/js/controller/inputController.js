import { app } from "../index.js";
import { displayCountView } from "../view/inputView.js";
import { displayRacingCars } from "../view/racingView.js";
import { startRacingGame } from "./racingController.js";
import { isNotDuplicatedArray, isAlphanumeric } from "./utils.js";

const isValidCarNames = function (carNamesInput) {
  return (
    isNotDuplicatedArray(carNamesInput) &&
    carNamesInput.every(
      (carName) =>
        1 <= carName.length && carName.length <= 5 && isAlphanumeric(carName)
    )
  );
};

const isValidCount = function (value) {
  return Number(value) >= 1;
};

export const handleCarNamesSubmit = function () {
  const carNamesInput = document
    .querySelector("#car-names-input")
    .value.split(",");

  if (!isValidCarNames(carNamesInput)) {
    alert("유효한 자동차이름이 아닙니다.");
    return;
  }

  displayCountView();
};

export const handleCountSubmit = function () {
  const carNames = document.querySelector("#car-names-input").value.split(",");
  const countInput = document.querySelector("#count-input").value;

  if (!isValidCount(countInput)) {
    alert("시도할 횟수는 1이상이어야 합니다.");
    return;
  }

  app.generateCars(carNames);
  displayRacingCars(app.cars);
  startRacingGame(countInput);
};
