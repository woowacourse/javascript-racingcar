import readline from "readline";
import { VIEW_MESSAGE } from "../constants/message/view.js";
import { CAR_RULE } from "../constants/rule/car.js";

const readLineAsync = (query = "") => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(query, (input) => {
      rl.close();
      resolve(input);
    });
  });
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

export const getCarName = async () => {
  const carName = await readLineAsync(VIEW_MESSAGE.CAR_NAME_INPUT);
  const carNames = carName.split(CAR_RULE.NAME_SEPARATOR);
  return carNames.map((carName) => carName.trim());
};

export const getAttemptCount = async () => {
  const attemptCount = await readLineAsync(VIEW_MESSAGE.ATTEMPT_COUNT);
  return Number(attemptCount);
};
