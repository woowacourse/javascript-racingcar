import { ERROR_MESSAGE } from "./constants/message.js";

export const validateCarName = (name, { max }) => {
  if (!name.length) {
    throw new Error(ERROR_MESSAGE.carNameIsBlank);
  }
  if (name.length > max) {
    throw new Error(ERROR_MESSAGE.invalidCarNameLength);
  }
};

export const validateCarsLength = (cars, { min, max }) => {
  if (cars.length < min || cars.length > max) {
    throw new Error(ERROR_MESSAGE.invalidCarLength);
  }
};

export const validateUniqueCarNames = (carNames) => {
  if (new Set(carNames).size !== carNames.length) {
    throw new Error(ERROR_MESSAGE.duplicateCarName);
  }
};

export const validateRoundNumber = (number, { min, max }) => {
  if (!Number.isInteger(number)) {
    throw new Error(ERROR_MESSAGE.notInteger);
  }

  if (number < min || number > max) {
    throw new Error(ERROR_MESSAGE.invalidRoundNumber);
  }
};
