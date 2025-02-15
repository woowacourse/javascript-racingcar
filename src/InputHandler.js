import { INFO_MESSAGE } from "./constants.js";
import readLineAsync from "./Input.js";
import { validateAttempt } from "./validate.js";

export const getCarNames = async () => {
  return await readLineAsync(INFO_MESSAGE.CAR_NAME_PROMPT);
};

export const getAttempt = async () => {
  while (true) {
    const attempt = Number(await readLineAsync(INFO_MESSAGE.ATTEMPT_INPUT));
    try {
      validateAttempt(attempt);
      return attempt;
    } catch (error) {
      console.log(error.message);
    }
  }
};
