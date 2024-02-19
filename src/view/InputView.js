import MESSAGE from "../constants/Message.js";
import readLineAsync from "../utils/readLineAsync.js";

export const readCarNames = async () => {
  const carNames = await readLineAsync(MESSAGE.readCarNames);

  return carNames;
};

export const readAttempt = async () => {
  const attempt = await readLineAsync(MESSAGE.readAttempt);
  console.log("");

  return attempt;
};
