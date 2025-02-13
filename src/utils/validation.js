import { createError } from "./createError.js";
import { ERROR_MESSAGE } from "../constants/constants.js";

export const validateCarNames = (input) => {
  if (input === "") createError(ERROR_MESSAGE.EMPTY_INPUT);

  if (input.replace(/[^,a-zA-Z가-힣]/g, "").length !== input.length) {
    createError(ERROR_MESSAGE.INVALID_NAME_SEPARATOR);
  }
  const cars = input.split(",");
  if (cars.length !== new Set(cars).size) {
    createError(ERROR_MESSAGE.DUPLICATE_NAME);
  }
  if (cars.some((car) => car.length < 1 || car.length > 5)) {
    createError(ERROR_MESSAGE.INVALID_NAME_LENGTH);
  }
};

export const validateTryCount = (input) => {
  if (input === "") createError(ERROR_MESSAGE.EMPTY_INPUT);

  if (isNaN(Number(input))) {
    createError(ERROR_MESSAGE.INVALID_TRY_COUNT);
  }
  if (input < 1) {
    createError(ERROR_MESSAGE.INVALID_TRY_COUNT);
  }
};
