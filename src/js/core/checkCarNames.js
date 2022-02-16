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
  if (
    !isUnderMinCarNamesLength(carNames) &&
    !isOverMaxCarNameLength(carNames) &&
    !isOverlapCarNames(carNames)
  ) {
    return carNames;
  }
};

const isOverMaxCarNameLength = carNames => {
  const isCorrectCarNames = carName => carName.length <= MAX_CAR_NAME_LENGTH;
  const iscorrectValue = carNames.every(isCorrectCarNames);
  displayAlert(!iscorrectValue, alertMessage.overMaxCarNameLength);
  return !iscorrectValue;
};

const isUnderMinCarNamesLength = carNames => {
  const isIncorrectValue = carNames.length < MIN_CAR_COUNT;
  displayAlert(isIncorrectValue, alertMessage.UnderMinCarNamesLength);
  return isIncorrectValue;
};

const isOverlapCarNames = carNames => {
  const isIncorrectValue = carNames.length !== new Set(carNames).size;
  displayAlert(isIncorrectValue, alertMessage.OverlapCarNames);
  return isIncorrectValue;
};
