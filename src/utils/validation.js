import { ERROR } from "../constants/messages.js";

export const validateCarNames = (carNames) => {
  const splitCars = carNames.split(",");

  if (isArrEmpty(splitCars)) {
    throw new Error(ERROR.IS_CAR_NAME_EMPTY);
  }

  if (!isLengthLongerThanFive(splitCars)) {
    throw new Error(ERROR.IS_LENGTH_LONGER_THAN_FIVE);
  }
  return splitCars;
};

const isArrEmpty = (arr) => {
  return arr.some((item) => item === "");
};

const isLengthLongerThanFive = (arr) => {
  return arr.every((item) => item.length < 5);
};
