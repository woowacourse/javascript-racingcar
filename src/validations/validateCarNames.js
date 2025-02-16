import { ERROR_CAR_NAMES_MESSAGE, MAX_CAR_NAME_LENGTH } from "../constants/constants.js";
import throwErrorIfInvalid from "../utils/throwErrorIfInvalid.js";

const parseCarNames = (input) => {
  return input
    .split(",")
    .map((el) => el.trim())
    .filter((el) => el !== "");
};

const hasOverlengthName = (carNames) => carNames.some((car) => car.length > MAX_CAR_NAME_LENGTH);
const hasOnlyOnePlayer = (carNames) => carNames.length === 1;
const hasDuplicateNames = (carNames) => new Set(carNames).size !== carNames.length;

const validateCarNames = (input) => {
  const carNames = parseCarNames(input);

  throwErrorIfInvalid(hasOverlengthName(carNames), ERROR_CAR_NAMES_MESSAGE.OVER);
  throwErrorIfInvalid(hasOnlyOnePlayer(carNames), ERROR_CAR_NAMES_MESSAGE.NOT_ENOUGH_PLAYERS);
  throwErrorIfInvalid(hasDuplicateNames(carNames), ERROR_CAR_NAMES_MESSAGE.DUPLICATE);

  return carNames;
};

export default validateCarNames;
