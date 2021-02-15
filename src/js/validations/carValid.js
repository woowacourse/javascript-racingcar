import {VALID} from '../constants/constant.js';

export const isCarExist = (car) => {
  return car.length > VALID.ZERO;
};

export const isCarNameOverMaxLength = (carNames) => {
  return carNames.some((carName) => carName.length > VALID.CARNAME_MAX_LENGTH);
};

export const isCarNameBlank = (carNames) => {
  return carNames.some((carName) => carName.length < VALID.CARNAME_MIN_LENGTH);
};

export const isCarNameDuplicated = (carNames) => {
  return carNames.length !== new Set(carNames).size;
};
