import { $ } from '../util/dom.js';
import {
  MIN_CAR_NAME_LENGTH,
  MAX_CAR_NAME_LENGTH,
  MIN_CAR_NAMES_LENGTH,
} from '../constants/constant.js';
import { displayAlert } from './displayAlert.js';
import { alertMessage } from '../constants/string.js';

export const getCarNames = e => {
  e.preventDefault();
  const carNames = $('#car-names-input')
    .value.split(',')
    .filter(carName => carName.length >= MIN_CAR_NAME_LENGTH);

  if (!checkCarNames(carNames)) {
    return carNames;
  }
};

const checkCarNames = carNames => {
  return (
    isUnderMinCarNamesLength(carNames) ||
    isOverMaxCarNameLength(carNames) ||
    isOverlapCarNames(carNames)
  );
};

const isOverMaxCarNameLength = carNames => {
  let wrongCarNames = carNames.filter(
    carName => carName.length > MAX_CAR_NAME_LENGTH,
  );
  const isIncorrectValue = wrongCarNames.length > 0;
  displayAlert(isIncorrectValue, alertMessage.overMaxCarNameLength);
  return isIncorrectValue;
};

const isUnderMinCarNamesLength = carNames => {
  const isIncorrectValue = carNames.length < MIN_CAR_NAMES_LENGTH;
  displayAlert(isIncorrectValue, alertMessage.UnderMinCarNamesLength);
  return isIncorrectValue;
};

const isOverlapCarNames = carNames => {
  const isIncorrectValue = carNames.length !== new Set(carNames).size;
  displayAlert(isIncorrectValue, alertMessage.OverlapCarNames);
  return isIncorrectValue;
};
