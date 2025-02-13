import { ERROR } from "../constants/messages.js";

const isArrEmpty = (arr) => {
  return arr.some((item) => item === "");
};

const isLengthLongerThanFive = (arr) => {
  return arr.every((item) => item.length < 5);
};

export const validateCarNames = (carNamesArr) => {
  if (isArrEmpty(carNamesArr)) {
    throw new Error(ERROR.IS_CAR_NAME_EMPTY);
  }

  if (!isLengthLongerThanFive(carNamesArr)) {
    throw new Error(ERROR.IS_LENGTH_LONGER_THAN_FIVE);
  }
};

export const validateCount = (number) => {
  if (isNaN(number)) {
    throw new Error(ERROR.IS_NOT_NUMBER);
  }

  if (number === "") {
    throw new Error(ERROR.IS_TRY_COUNT_EMPTY);
  }
};
