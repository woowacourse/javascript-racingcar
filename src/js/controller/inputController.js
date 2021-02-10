import { app } from "../index.js";
import {
  displayCountView,
  toggleCarNameInputDisable,
  toggleCountInputDisable,
} from "../view/inputView.js";
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
  return 1<=Number(value) && Number(value)<=100;
};

const getCarNamesInput = function () {
  return document
    .querySelector("#car-names-input")
    .value.split(",")
    .map((e) => e.trim());
};

export const handleCarNamesSubmit = function () {
  const carNamesInput = getCarNamesInput();
  if (!isValidCarNames(carNamesInput)) {
    alert("유효한 자동차이름이 아닙니다.");
    return;
  }
  if (10 < carNamesInput.length) {
    alert("자동차는 10대를 넘을 수 없습니다.");
    return;
  }
  toggleCarNameInputDisable();
  displayCountView();
};

export const handleCountSubmit = function () {
  const carNamesInput = getCarNamesInput();
  const countInput = document.querySelector("#count-input").value;

  if (!isValidCount(countInput)) {
    alert("시도할 횟수는 1이상 100이하여야 합니다.");
    return;
  }
  toggleCountInputDisable();
  app.generateCars(carNamesInput);
  displayRacingCars(app.cars);
  startRacingGame(countInput);
};
