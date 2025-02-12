import readline from "readline";
import { RULE, VIEW_MESSAGE } from "../constants/index.js";

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

export const getCarName = async () => {
  const carName = await readLineAsync(VIEW_MESSAGE.CAR_NAME_INPUT);
  const carNames = carName.split(RULE.CAR_NAME_SEPARATOR);
  return carNames.map((carName) => carName.trim());
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
