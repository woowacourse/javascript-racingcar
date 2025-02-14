import { isInRange, isDuplicate } from "./predicate.js";
import { INVALID_MESSAGE } from "../constants/message/invalid.js";
import { CAR_RULE } from "../constants/rule/car.js";
import { ATTEMPT_RULE } from "../constants/rule/attempt.js";
import CustomError from "../CustomError.js";

export const validateCarNames = (carNames) => {
  if (!isInRange(CAR_RULE.MIN_COUNT, CAR_RULE.MAX_COUNT, carNames.length)) {
    throw new CustomError(INVALID_MESSAGE.CAR_COUNT);
  }

  const isInvalidCarNames = carNames.some(
    (carName) =>
      !isInRange(
        CAR_RULE.MIN_NAME_LENGTH,
        CAR_RULE.MAX_NAME_LENGTH,
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

export const validateAttemptCount = (attemptCount) => {
  if (!Number.isSafeInteger(attemptCount)) {
    throw new CustomError(INVALID_MESSAGE.INTEGER_FORMAT);
  }

  if (
    !isInRange(ATTEMPT_RULE.MIN_COUNT, ATTEMPT_RULE.MAX_COUNT, attemptCount)
  ) {
    throw new CustomError(INVALID_MESSAGE.ATTEMPT_COUNT);
  }
};
