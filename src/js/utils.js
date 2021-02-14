import { LIMIT, MESSAGE } from "./constants.js";

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const isValidCarNames = (carNames) => {
  if (isUnderMinCarNumber(carNames)) {
    alert(MESSAGE.CAR_NAME.MIN_NUMBER);
    return false;
  }

  if (isOverMaxNameLength(carNames)) {
    alert(MESSAGE.CAR_NAME.MAX_LENGTH);
    return false;
  }

  if (isDuplication(carNames)) {
    alert(MESSAGE.CAR_NAME.DUPLICATION);
    return false;
  }

  return true;
};

export const isValidLapCount = (userInput) => {
  if (isNull(userInput)) {
    alert(MESSAGE.LAP_COUNT.NOT_A_NUMBER);
    return false;
  }

  const lapCount = Number(userInput);

  if (isOverMaxLapCount(lapCount)) {
    alert(MESSAGE.LAP_COUNT.OUT_OF_RANGE);
    return false;
  }

  if (isUnderMinLapCount(lapCount)) {
    alert(MESSAGE.LAP_COUNT.OUT_OF_RANGE);
    return false;
  }

  if (!Number.isInteger(lapCount)) {
    alert(MESSAGE.LAP_COUNT.OUT_OF_RANGE);
    return false;
  }

  return true;
};

const isUnderMinCarNumber = (value) => {
  return value.length < LIMIT.CAR_NAME.MIN_NUMBER;
};

const isOverMaxNameLength = (value) => {
  return value.some((carName) => carName.length > LIMIT.CAR_NAME.MAX_LENGTH);
};

const isDuplication = (value) => {
  return value.some((carName, i) => i !== value.lastIndexOf(carName));
};

const isNull = (value) => {
  return value === "";
};

const isOverMaxLapCount = (value) => {
  return value > LIMIT.LAP_COUNT.MAX_NUMBER;
};

const isUnderMinLapCount = (value) => {
  return value < LIMIT.LAP_COUNT.MIN_NUMBER;
};
