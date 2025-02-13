import { ERROR_CAR_NAMES_MESSAGE, CAR_NAME_BOUNDARY_LENGTH } from "../constants/constants.js";

const validateCarNames = (input) => {
  const carNames = input.split(",").map((el) => el.trim());

  carNames.forEach((car) => {
    if (car === "") throw new Error(ERROR_CAR_NAMES_MESSAGE.NOT_EXIST);
    if (car.length > CAR_NAME_BOUNDARY_LENGTH) throw new Error(ERROR_CAR_NAMES_MESSAGE.OVER);
  });

  if (new Set(carNames).size !== carNames.length) throw new Error(ERROR_CAR_NAMES_MESSAGE.DUPLICATE);

  return carNames;
};

export default validateCarNames;
