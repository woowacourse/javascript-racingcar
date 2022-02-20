import { CAR_NAME_LENGTH } from "../constants.js";

export const isValidCarsName = carNameArr => {
  return (
    carNameArr.length >= 2 &&
    new Set(carNameArr).size === carNameArr.length
  );
};

export const isValidLengthCarName = carName => {
  const { MIN, MAX } = CAR_NAME_LENGTH;

  return carName.length >= MIN && carName.length <= MAX;
};
