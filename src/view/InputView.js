import { PROMPT } from '../constant/strings.js';
import readLineAsync from '../utils/readLine.js';

const inputView = {
  async readCarNames() {
    const input = await readLineAsync(PROMPT.inputCarName);
    return input;
  },

  async readTryCount() {
    const input = await readLineAsync(PROMPT.inputTryCount);
    return input;
  }
};
export default inputView;
