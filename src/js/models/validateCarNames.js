import { CAR_NAME, ERR_MESSAGE } from '../constants/inputRestriction.js';

export const validateCarNames = (cars) => {
  const carNames = cars.map((car) => car.name);

  if (!carNames.every(isValidLength)) {
    return ERR_MESSAGE.CAR_NAME_TOO_LONG;
  }
  if (carNames.some(isBlank)) {
    return ERR_MESSAGE.CAR_NAME_CANNOT_BE_BLANK;
  }
};

const isValidLength = (carName) => {
  return carName.length <= CAR_NAME.MAX_LENGTH;
};

const isBlank = (carName) => {
  return carName.length < CAR_NAME.MIN_LENGTH;
};
