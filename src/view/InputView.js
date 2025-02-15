import { readLineAsync } from "./ReadLineAsync.js";
import { SystemMessage } from "../constants/SystemMessage.js";

export const InputView = {
  async getCarName() {
    return await readLineAsync(SystemMessage.CAR_NAME_MESSAGE);
  },
  async getRound() {
    return await readLineAsync(SystemMessage.ROUND_MESSAGE);
  },
};
