import { app } from "../index.js";
import { $ } from "../utils/querySelector.js";
import { displayCountView } from "../view/inputView.js";
import { displayRacingCars } from "../view/racingView.js";
import { startRacingGame } from "./racingController.js";

const isValidLength = (carName) => {
  return 1 <= carName.length && carName.length <= 5;
};

// 화살표 함수로 통일하기
const isAlphanumeric = function (input) {
  return /^[a-zA-Z0-9]+$/.test(input);
};

const isValidCarName = (carName) => {
  return isValidLength(carName) && isAlphanumeric(carName);
};

const isDuplicated = (array) => new Set(array).size !== array.length;

const isValidCarNames = (carNames) => {
  return carNames.every(isValidCarName) && !isDuplicated(carNames);
};

// 화살표 함수로 통일하기
const isValidCount = function (value) {
  return Number(value) >= 1;
};

export const handleCarNamesSubmit = function () {
  const carNames = $("#car-names-input").value.split(",");

  if (!isValidCarNames(carNames)) {
    alert("유효한 자동차 이름이 아닙니다.");
    return;
  }

  app.generateCars(carNames);
  displayCountView();
};

export const handleCountSubmit = function () {
  // const carNames = $("#car-names-input").value.split(",");
  const count = $("#count-input").value;

  if (!isValidCount(count)) {
    alert("시도할 횟수는 1이상이어야 합니다.");
    return;
  }

  // app.generateCars(carNames);
  app.generateCount(count);
  displayRacingCars(app.cars);
  startRacingGame();
};
