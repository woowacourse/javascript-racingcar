import { readLineAsync } from './ReadLineAsync.js';
import { systemMessage } from '../settings/SystemMessage.js';

export const InputView = {
  async getCarName() {
    const nameInput = await readLineAsync(systemMessage.CAR_NAME_MESSAGE);
    return nameInput;
  },
  async getRound() {
    const round = await readLineAsync(systemMessage.ROUND_MESSAGE);
    return round;
  },
};
