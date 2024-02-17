import { INPUT_MESSAGE } from '../constants/messages/messages.js';
import { CommonValidator, CarNameValidator } from '../validator/index.js';

import Console from '../utils/console.js';
import { SYMBOLS } from '../constants/symbols.js';
import TryCountValidator from '../validator/tryCount/TryCountValidator.js';

const InputView = Object.freeze({
  async read(message) {
    const inputValue = await Console.readLineAsync(message);

    CommonValidator.check(inputValue);

    return inputValue;
  },

  async readRacingCarNames() {
    const inputRacingCarNames = await this.read(INPUT_MESSAGE.racingCar);

    CarNameValidator.check(inputRacingCarNames);

    return inputRacingCarNames.split(SYMBOLS.comma);
  },

  async readTryCount() {
    const inputTryCount = await this.read(INPUT_MESSAGE.tryCount);

    TryCountValidator.check(inputTryCount);

    return Number(inputTryCount);
  },
});

export default InputView;
