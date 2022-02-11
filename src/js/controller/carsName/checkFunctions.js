import { CAR_NAME_LENGTH } from "../../util/constants.js";

export const isValidLength = carNameArr => {
  for (let i = 0; i < carNameArr.length; i++) {
    carNameArr[i] = carNameArr[i].trim();
    if (!carNameArr[i] || !isLengthOK(carNameArr[i])) {
      return false;
    }
  }

  return true;
};

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
