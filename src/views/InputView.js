import readLineAsync from '../utils/readLineAsync.js';

const InputView = {
  async readUserInput(message) {
    return await readLineAsync(message);
  },
};

export default InputView;
