import { CAR_NAME_LENGTH } from "../../util/constants.js"

export const isLengthOK = carName => {
  const { MIN, MAX } = CAR_NAME_LENGTH;

  return carName.length >= MIN && carName.length <= MAX;
};

export const isDuplicateName = carNameArr => {
  const carNameSet = new Set(carNameArr);

  if (carNameArr.length !== carNameSet.size) {
    return true;
  }

  return false;
};
