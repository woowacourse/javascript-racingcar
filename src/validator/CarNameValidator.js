/* eslint-disable operator-linebreak */
import { CONFIG } from '../constants/config.js';
import { ERROR } from '../constants/messages.js';
import { _pipe } from '../utils/utils.js';

const checkCarNameLength = (carName) => {
  if (
    carName.length > CONFIG.MAXIMUM_CAR_NAME ||
    carName.length < CONFIG.MINIMUM_CAR_NAME
  ) {
    throw new Error(ERROR.CAR_NAME_LENGTH);
  }
  return carName;
};
const checkBlank = (carName) => {
  if (carName.includes(CONFIG.BLANK)) {
    throw new Error(ERROR.BLANK);
  }
  return carName;
};
const checkDuplicatedCarName = (carNames) => {
  if (carNames.length !== new Set(carNames).size) {
    throw new Error(ERROR.DUPLICATED_CAR_NAME);
  }
  return carNames;
};

const carNameValidator = _pipe(
  checkCarNameLength,
  checkBlank,
  checkDuplicatedCarName
);

export default carNameValidator;
