import { isInRange, isDuplicate } from "./predicate.js";
import { INVALID_MESSAGE, RULE } from "../constants/index.js";
import CustomError from "../CustomError.js";

export const validateCarNames = (carNames) => {
  if (!isInRange(RULE.MIN_CAR_COUNT, RULE.MAX_CAR_COUNT, carNames.length)) {
    throw new CustomError(INVALID_MESSAGE.CAR_COUNT);
  }

  const isInvalidCarNames = carNames.some(
    (carName) =>
      !isInRange(
        RULE.MIN_CAR_NAME_LENGTH,
        RULE.MAX_CAR_NAME_LENGTH,
        carName.length
      )
  );

  if (isInvalidCarNames) {
    throw new CustomError(INVALID_MESSAGE.CAR_NAME_LENGTH);
  }

  if (isDuplicate(carNames)) {
    throw new CustomError(INVALID_MESSAGE.DUPLICATE_CAR_NAME);
  }
};
