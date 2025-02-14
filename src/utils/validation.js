import { ERROR } from "../constants/messages.js";
import { MAX_CAR_NAME_LENGTH } from "../constants/race.js";

export const hasEmptyString = (arr) => {
  return arr.some((item) => item === "");
};

export const isLengthLongerThanFive = (arr) => {
  return arr.some((item) => item.length > MAX_CAR_NAME_LENGTH);
};

export const validateCarNames = (carNamesArr) => {
  if (hasEmptyString(carNamesArr)) {
    throw new Error(ERROR.IS_CAR_NAME_EMPTY);
  }

  if (isLengthLongerThanFive(carNamesArr)) {
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
