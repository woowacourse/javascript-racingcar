import InputView from '../views/InputView.js';
import { Parser } from '../utils/Parser.js';
import { Validator } from '../utils/Validator.js';
import DEFINITION from '../constants/Definition.js';
import MESSAGE from '../constants/Message.js';

class InputController {
  static async inputName() {
    while (true) {
      try {
        const inputName = await InputView.readLineAsync(MESSAGE.INPUT.NAME);
        const splittedName = Parser.splitName(inputName);
        Validator.validateName(splittedName, DEFINITION.MAX_NAME_LENGTH);
        return splittedName;
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  static async inputTryNumber() {
    while (true) {
      try {
        const inputTryNumber = await InputView.readLineAsync(MESSAGE.INPUT.TRY_NUMBER);
        const parsedNumber = Number(inputTryNumber.trim());
        Validator.validateTryNumber(parsedNumber, DEFINITION.MIN_GAME, DEFINITION.MAX_GAME);
        return parsedNumber;
      } catch (error) {
        console.log(error.message);
      }
    }
  }
}

export default InputController;
