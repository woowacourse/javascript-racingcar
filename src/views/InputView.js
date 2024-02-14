import { INPUT_MESSAGE } from '../constants/message.js';
import { CommonValidator, CarNameValidator } from '../validator/index.js';

import Console from '../utils/console.js';
import { SYMBOLS } from '../constants/symbols.js';

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
});

export default InputView;
