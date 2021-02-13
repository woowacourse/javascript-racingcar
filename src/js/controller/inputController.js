import { app } from "../index.js";
import { displayCountView } from "../view/inputView.js";
import { displayRacingCars } from "../view/racingView.js";
import { startRacingGame } from "./racingController.js";
import { isNotDuplicatedNames, isAlphanumeric, $ } from "./utils.js";

const isValidCarName = function (carName) {
  return isAlphanumeric(carName) && isValidLength(carName);
};

const isValidLength = function (carName) {
  return 1 <= carName.length && carName.length <= 5;
};

const isValidCount = function (value) {
  return Number(value) >= 1;
};

export const handleCarNamesSubmit = function () {
  const carNamesInput = $("#car-names-input").value.split(",");

  if (!isNotDuplicatedNames(carNamesInput)) {
    alert("자동차 이름이 중복됩니다.");
    return;
  }

  carNamesInput.forEach((carName) => {
    if (!isValidCarName(carName)) {
      alert("유효한 자동차이름이 아닙니다.");
      return;
    }
  });

  displayCountView();
};

export const handleCountSubmit = function () {
  const carNames = $("#car-names-input").value.split(",");
  const countInput = $("#count-input").value;

  if (!isValidCount(countInput)) {
    alert("시도할 횟수는 1이상이어야 합니다.");
    return;
  }

  app.generateCars(carNames);
  displayRacingCars(app.cars);
  startRacingGame(countInput);
};
