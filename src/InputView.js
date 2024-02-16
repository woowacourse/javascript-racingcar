import Console from './utils/Console';
import { INPUT_MESSAGE } from './constants';

const InputView = {
  async queryCarName() {
    return await Console.readLineAsync(INPUT_MESSAGE.CAR_NAME_INPUT);
  },

  async queryTryCount() {
    return await Console.readLineAsync(INPUT_MESSAGE.TRY_COUNT_INPUT);
  },
};

export default InputView;
