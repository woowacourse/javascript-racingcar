import Console from './utils/Console';
import { INPUT_MESSAGE } from './constants';

const InputView = {
  async queryCarName() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAME_INPUT);
    return carNames;
  },

  async queryTryCount() {
    const tryCount = await Console.readLineAsync(INPUT_MESSAGE.TRY_COUNT_INPUT);
    return tryCount;
  },
};

export default InputView;
