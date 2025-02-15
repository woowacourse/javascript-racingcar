import { INFO_MESSAGE } from "../config/constants.js";
import { validateAttempt } from "../utils/validate.js";
import readLineAsync from "./input.js";

export const getCarNames = async () => {
  return (await readLineAsync(INFO_MESSAGE.CAR_NAME_INPUT)).trim();
};

export const getAttempt = async () => {
  while (true) {
    const attempt = Number(
      (await readLineAsync(INFO_MESSAGE.ATTEMPT_INPUT)).trim()
    );
    try {
      validateAttempt(attempt);
      return attempt;
    } catch (error) {
      console.log(error.message);
    }
  }
};
