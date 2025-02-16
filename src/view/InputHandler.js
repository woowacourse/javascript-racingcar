import { CONSOLE_MESSAGE } from '../constant/message.js';
import ValidateModule from './ValidatorModule.js';
import { readLineAsync } from './readLineAsync.js';

class InputHandler {
  static CAR_NAME_SEPARATOR = ',';

  static async carNamesInput() {
    const input = await readLineAsync(CONSOLE_MESSAGE.carNamesInput);
    ValidateModule.validateCarInput(input);
    const carNames = input.split(InputHandler.CAR_NAME_SEPARATOR).map((str) => str.trim());
    return carNames;
  }

  static async tryCountInput() {
    const input = await readLineAsync(CONSOLE_MESSAGE.tryCountInput);
    ValidateModule.validateTryCountInput(input);
    const tryCount = Number(input);
    return tryCount;
  }
}

export default InputHandler;
