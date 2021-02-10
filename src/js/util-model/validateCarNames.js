import { ERR_MESSAGE, CAR } from './constant.js';

export const validateCarNames = (cars) => {
  if (!cars.every((car) => isValidLength(car.name))) {
    return ERR_MESSAGE.CAR_NAME_TOO_LONG;
  }
  if (!cars.every((car) => !isBlank(car.name))) {
    return ERR_MESSAGE.CAR_NAME_CANNOT_BE_BLANK;
  }
};

const isValidLength = (carName) => {
  return carName.length <= CAR.MAX_NAME_LENGTH;
};

const isBlank = (carName) => {
  return carName.length < CAR.MIN_NAME_LENGTH;
};
