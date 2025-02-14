import { VIEW_MESSAGE } from "../constants/message/view.js";
import { CAR_RULE } from "../constants/rule/car.js";
import { readLineAsync } from "../utils/input.js";

export const getCarName = async () => {
  const carName = await readLineAsync(VIEW_MESSAGE.CAR_NAME_INPUT + "\n");
  const carNames = carName.split(CAR_RULE.NAME_SEPARATOR);
  return carNames.map((carName) => carName.trim());
};

export const getAttemptCount = async () => {
  const attemptCount = await readLineAsync(VIEW_MESSAGE.ATTEMPT_COUNT + "\n");
  return Number(attemptCount);
};
