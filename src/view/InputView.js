import Console from '../util/Console.js';
import { MESSAGE } from '../util/Constant.js';

const InputView = {
  readCarName() {
    return new Promise((resolve) => {
      Console.readLine(MESSAGE.input.carName, (carNames) => {
        resolve(carNames);
      });
    });
  },

  async readTryCount() {
    return new Promise((resolve) => {
      Console.readLine(MESSAGE.input.tryCount, (tryCount) => {
        resolve(tryCount);
      });
    });
  },
};

export default InputView;
