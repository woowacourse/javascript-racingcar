import { $ } from '../util/dom.js';
import { displayAlert } from '../component/displayAlert.js';
import { alertMessage } from '../constants/string.js';
import {
  MIN_CAR_NAME_LENGTH,
  MAX_CAR_NAME_LENGTH,
  MIN_CAR_COUNT,
} from '../constants/constant.js';

export const getCarNames = e => {
  e.preventDefault();
  const carNames = $('#car-names-input')
    .value.split(',')
    .filter(carName => carName.length >= MIN_CAR_NAME_LENGTH);

  return carNames;
};

export const checkCarNames = carNames => {
  if (isUnderMinCarNamesLength(carNames)) {
    displayAlert(alertMessage.UnderMinCarNamesLength);
    return;
  }
  if (isOverMaxCarNameLength(carNames)) {
    displayAlert(alertMessage.overMaxCarNameLength);
    return;
  }
  if (isOverlapCarNames(carNames)) {
    displayAlert(alertMessage.OverlapCarNames);
    return;
  }
  return carNames;
};

const isOverMaxCarNameLength = carNames => {
  const isCorrectCarNames = carName => carName.length <= MAX_CAR_NAME_LENGTH;
  const isCorrectValue = carNames.every(isCorrectCarNames);
  return !isCorrectValue;
};

const isUnderMinCarNamesLength = carNames => {
  const isIncorrectValue = carNames.length < MIN_CAR_COUNT;
  return isIncorrectValue;
};

const isOverlapCarNames = carNames => {
  const isIncorrectValue = carNames.length !== new Set(carNames).size;
  return isIncorrectValue;
};
