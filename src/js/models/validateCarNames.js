import { CAR_NAME, ERR_MESSAGE } from '../constants/inputRestriction.js';

export const validateCarNames = (cars) => {
  if (!cars.every((car) => isValidLength(car.getName()))) {
    return ERR_MESSAGE.CAR_NAME_TOO_LONG;
  }
  if (!cars.every((car) => !isBlank(car.getName()))) {
    return ERR_MESSAGE.CAR_NAME_CANNOT_BE_BLANK;
  }
};

const isValidLength = (carName) => {
  return carName.length <= CAR_NAME.MAX_LENGTH;
};

const isBlank = (carName) => {
  return carName.length < CAR_NAME.MIN_LENGTH;
};
