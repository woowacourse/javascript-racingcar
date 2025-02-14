import { ERROR } from "../constants/messages.js";

export const hasEmptyString = (arr) => {
  return arr.some((item) => item === "");
};

export const isLongerThanMaxLength = (arr, maxLength) => {
  return arr.every((item) => item.length < maxLength);
};

export const validateCarNames = (stringOfCarNames) => {
  const carNamesArr = stringOfCarNames.split(",");

  if (hasEmptyString(carNamesArr)) {
    throw new Error(ERROR.IS_CAR_NAME_EMPTY);
  }

  if (!isLongerThanMaxLength(carNamesArr, 5)) {
    throw new Error(ERROR.IS_LENGTH_LONGER_THAN_FIVE);
  }
};

export const validateCount = (number) => {
  if (Number.isNaN(number)) {
    throw new Error(ERROR.IS_NOT_NUMBER);
  }

  if (number === "") {
    throw new Error(ERROR.IS_TRY_COUNT_EMPTY);
  }
};
