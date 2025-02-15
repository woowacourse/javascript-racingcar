import { ERROR_CAR_NAMES_MESSAGE, CAR_NAME_BOUNDARY_LENGTH } from "../constants/constants.js";

const validateCarNames = (input) => {
  const carNames = input.split(",").map((el) => el.trim());

  carNames.forEach((car) => {
    if (isEmpty(car)) throw new Error(ERROR_CAR_NAMES_MESSAGE.NOT_EXIST);
    if (isOverLength(car)) throw new Error(ERROR_CAR_NAMES_MESSAGE.OVER);
  });
  if (isDuplicated(carNames)) throw new Error(ERROR_CAR_NAMES_MESSAGE.DUPLICATE);

  return carNames;
};

const isEmpty = (str) => str === "";
const isOverLength = (str) => str.length > CAR_NAME_BOUNDARY_LENGTH;
const isDuplicated = (arr) => new Set(arr).size !== arr.length;

export default validateCarNames;
