import { SELECTORS, GAME, ERR_MESSAGE } from '../constants/constants.js';
import $ from '../utils/dom.js';
import { showCountInput } from '../setScreen.js';
import { makeObjectCars } from '../init/cars.js';

const { MAX_CAR_NAME_LENGTH, MIN_CAR_NAME_LENGTH } = GAME;
const { NAME_TOO_LONG, NAME_CANNOT_BE_BLANK } = ERR_MESSAGE;

function isValidLength(name) {
  return name.length <= MAX_CAR_NAME_LENGTH;
}

function isBlank(name) {
  return name.length >= MIN_CAR_NAME_LENGTH;
}

function isValidCarNames(carNames) {
  if (!carNames.every(isValidLength)) {
    alert(NAME_TOO_LONG);
    return false;
  }
  if (!carNames.every(isBlank)) {
    alert(NAME_CANNOT_BE_BLANK);
    return false;
  }
  return true;
}

export default function handleCarNamesSubmit() {
  const carNames = $(SELECTORS.CAR_NAMES_INPUT)
    .value.split(',')
    .map((car) => car.trim());
  if (!isValidCarNames(carNames)) {
    $(SELECTORS.CAR_NAMES_INPUT).value = '';
    return;
  }

  makeObjectCars(carNames);
  showCountInput();
}
