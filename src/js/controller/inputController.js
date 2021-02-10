import {
  displayCountView,
  toggleCarNameInputDisable,
  toggleCountInputDisable,
} from "../view/inputView.js";
import { app } from "../index.js";
import { alertMsg, selectors } from "../keys.js";
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


const getCarNamesInput = function () {
  return document
  .querySelector(selectors.carNamesInput)
  .value.split(",")
  .map((e) => e.trim());
};

const isValidCount = function (value) {
  return 1<=Number(value) && Number(value)<=100;
};

export const handleCarNamesSubmit = function () {
  const carNamesInput = getCarNamesInput();
  if (!isValidCarNames(carNamesInput)) {
    alert(alertMsg.isNotValidCarNames);
    return;
  }
  if (10 < carNamesInput.length) {
    alert(alertMsg.isNotValidCarNamesLength);
    return;
  }
  toggleCarNameInputDisable();
  displayCountView();
};

export const handleCountSubmit = function () {
  const carNamesInput = getCarNamesInput();
  const countInput = document.querySelector(selectors.countInput).value;

  if (!isValidCount(countInput)) {
    alert(alertMsg.isNotValidCount);
    return;
  }
  app.addCars(carNamesInput);
  toggleCountInputDisable();
  displayRacingCars(app.cars);
  startRacingGame(countInput);
};
