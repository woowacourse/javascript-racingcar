import { isInRange, isDuplicate } from "./predicate.js";
import { INVALID_MESSAGE } from "../constants/messages/invalid.js";
import { CAR_RULES } from "../constants/rules/car.js";
import { GAME_RULES } from "../constants/rules/game.js";
import CustomError from "../CustomError.js";

export const validateCarNames = (carNames) => {
  if (!isInRange(CAR_RULES.MIN_COUNT, CAR_RULES.MAX_COUNT, carNames.length)) {
    throw new CustomError(INVALID_MESSAGE.CAR_COUNT);
  }

  const isInvalidCarNames = carNames.some(
    (carName) =>
      !isInRange(
        CAR_RULES.MIN_NAME_LENGTH,
        CAR_RULES.MAX_NAME_LENGTH,
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
    !isInRange(
      GAME_RULES.MIN_ATTEMPT_COUNT,
      GAME_RULES.MAX_ATTEMPT_COUNT,
      attemptCount
    )
  ) {
    throw new CustomError(INVALID_MESSAGE.ATTEMPT_COUNT);
  }
};

export const retryUntilValid = async (getInputFn, validator) => {
  while (true) {
    try {
      const userInput = await getInputFn();
      validator(userInput);
      return userInput;
    } catch (error) {
      console.error(error.message);
    }
  }
};