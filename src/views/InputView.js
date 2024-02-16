import { INPUT_QUERY } from '../constants/car-race';
import Console from '../utils/Console';

const InputView = {
  async readInput(query) {
    const input = await Console.readLineAsync(query + '\n');
    return input;
  },

  async readCarNames() {
    const carNames = await this.readInput(INPUT_QUERY.carNames);

    return carNames;
  },

  async readTryCount() {
    const tryCount = await this.readInput(INPUT_QUERY.tryCount);
    return tryCount;
  },
};

export default InputView;
