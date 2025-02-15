import { ERROR_CAR_NAMES_MESSAGE, MAX_CAR_NAME_LENGTH } from "../constants/constants.js";

const validateCarNames = (input) => {
  const carNames = input.split(",").map((el) => el.trim());

  carNames.forEach((car) => {
    if (car === "") {
      throw new Error(ERROR_CAR_NAMES_MESSAGE.NOT_EXIST);
    }
    if (car.length > MAX_CAR_NAME_LENGTH) {
      throw new Error(ERROR_CAR_NAMES_MESSAGE.OVER);
    }
  });

  if (carNames.length === 1) {
    throw new Error(ERROR_CAR_NAMES_MESSAGE.NOT_ENOUGH_PLAYERS);
  }

  if (new Set(carNames).size !== carNames.length) {
    throw new Error(ERROR_CAR_NAMES_MESSAGE.DUPLICATE);
  }

  return carNames;
};

export default validateCarNames;
