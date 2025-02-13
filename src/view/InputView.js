import { readLineAsync } from "./ReadLineAsync.js";
import { SystemMessage } from "../settings/SystemMessage.js";

export const InputView = {
  async getCarName() {
    const nameInput = await readLineAsync(SystemMessage.CAR_NAME_MESSAGE);
    return nameInput;
  },
  async getRound() {
    const round = await readLineAsync(SystemMessage.ROUND_MESSAGE);
    return round;
  },
};
