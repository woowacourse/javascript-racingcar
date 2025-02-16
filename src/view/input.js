import { readLineAsync } from "../utils/readLineAsync.js";
import { VIEW_MESSAGE } from "../constants/messages/view.js";
import { CAR_RULES } from "../constants/rules/car.js";

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

export const getCarName = async () => {
  const carName = await readLineAsync(VIEW_MESSAGE.CAR_NAME_INPUT);
  const carNames = carName.split(CAR_RULES.NAME_SEPARATOR);
  return carNames.map((carName) => carName.trim());
};

export const getAttemptCount = async () => {
  const attemptCount = await readLineAsync(VIEW_MESSAGE.ATTEMPT_COUNT);
  return Number(attemptCount);
};
