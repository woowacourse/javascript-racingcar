import { INFO_MESSAGE } from "../constants.js";
import readLineAsync from "./Input.js";
import { validateAttempt } from "../domain/validate.js";

export const getCarNames = async () => {
  return await readLineAsync(INFO_MESSAGE.CAR_NAME_PROMPT);
};

export const getAttempt = async () => {
  return Number(await readLineAsync(INFO_MESSAGE.ATTEMPT_PROMPT));
};
