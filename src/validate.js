import { ERROR_MESSAGE } from "./constants.js";

export const validateCarNames = (cars, carNames) => {
  if (cars.length > 10) throw Error(ERROR_MESSAGE.CAR_COUNT);
  if (carNames.length !== new Set(carNames).size)
    throw Error(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
};

export const validateAttempt = (attempt) => {
  if (Number.isNaN(attempt)) throw Error(ERROR_MESSAGE.INVALID_ATTEMPT_NUMBER);
  else if (attempt <= 0) throw Error(ERROR_MESSAGE.ATTEMPT_TOO_LOW);
  else if (attempt > 50) throw Error(ERROR_MESSAGE.ATTEMPT_TOO_HIGH);
};
