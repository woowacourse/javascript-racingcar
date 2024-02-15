import { Console } from '../utils/index.js';

const InputView = {
  /**
   * @param {string} query
   * @returns {string}
   */
  async readInput(query) {
    const value = await Console.readLineAsync(`\n${query}\n`);

    return value;
  },
};

export default InputView;
