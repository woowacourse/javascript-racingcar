import { ERROR_CAR_NAMES_MESSAGE, MAX_CAR_NAME_LENGTH } from "../constants/constants.js";

const parseCarNames = (input) => {
  return input
    .split(",")
    .map((el) => el.trim())
    .filter((el) => el !== "");
};

const hasOverlengthName = (carNames) => {
  return carNames.some((car) => car.length > MAX_CAR_NAME_LENGTH);
};
const hasOnlyOnePlayer = (carNames) => {
  return carNames.length === 1;
};
const hasDuplicateNames = (carNames) => {
  return new Set(carNames).size !== carNames.length;
};

const validateCarNames = (input) => {
  const carNames = parseCarNames(input);

  if (hasOverlengthName(carNames)) {
    throw new Error(ERROR_CAR_NAMES_MESSAGE.OVER);
  }
  if (hasOnlyOnePlayer(carNames)) {
    throw new Error(ERROR_CAR_NAMES_MESSAGE.NOT_ENOUGH_PLAYERS);
  }
  if (hasDuplicateNames(carNames)) {
    throw new Error(ERROR_CAR_NAMES_MESSAGE.DUPLICATE);
  }

  return carNames;
};

export default validateCarNames;
