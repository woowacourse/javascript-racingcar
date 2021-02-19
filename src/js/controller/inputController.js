import { app } from "../index.js";
import { AlertMsg, Element } from "../utils/constants.js";
import { $ } from "../utils/querySelector.js";
import { displayCountView } from "../view/inputView.js";
import { displayRacingCars } from "../view/racingView.js";
import { startRacingGame } from "./racingController.js";

const isValidLength = (carName) => 1 <= carName.length && carName.length <= 5;

const isAlphanumeric = (input) => /^[a-zA-Z0-9]+$/.test(input);

const isValidCarName = (carName) => {
  return isValidLength(carName) && isAlphanumeric(carName);
};

const isDuplicated = (array) => new Set(array).size !== array.length;

const isValidCarNames = (carNames) => {
  return carNames.every(isValidCarName) && !isDuplicated(carNames);
};

const isValidCount = (value) => Number(value) >= 1;

export const handleCarNamesSubmit = () => {
  const carNames = $(Element.CAR_NAMES_INPUT_CLASS).value.split(",");

  if (!isValidCarNames(carNames)) {
    alert(AlertMsg.INVALID_CARNAME);
    return;
  }

  app.generateCars(carNames);
  displayCountView();
};

export const handleCountSubmit = () => {
  const count = $(Element.COUNT_INPUT_CLASS).value;

  if (!isValidCount(count)) {
    alert(AlertMsg.INVALID_COUNT);
    return;
  }
  app.generateCount(count);
  displayRacingCars(app.cars);
  startRacingGame();
};
