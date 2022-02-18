import { CAR_NAME_LENGTH } from "../constants.js";

export const isValidCarsName = carNameArr => {
  const { MIN, MAX } = CAR_NAME_LENGTH;

  return (
    carNameArr.length >= 2 &&
    new Set(carNameArr).size === carNameArr.length &&
    carNameArr.every(carName => carName.length >= MIN && carName.length <= MAX)
  );
};
