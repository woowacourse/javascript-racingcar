import InputView from '../views/InputView.js';
import { Parser } from '../utils/Parser.js';
import { Validator } from '../utils/Validator.js';
import DEFINITION from '../constants/Definition.js';
import MESSAGE from '../constants/Message.js';

class InputController {
  static async inputName() {
    try {
      const inputName = await InputView.readLineAsync(MESSAGE.INPUT.NAME);
      Validator.isEmpty(inputName);
      const splitedName = Parser.splitName(inputName);
      Validator.isArrayLengthOver(splitedName, DEFINITION.MAX_NAME_LENGTH);
      Validator.isDuplicate(splitedName);
      splitedName.forEach(name => {
        Validator.isStringLengthOver(name);
      });
      return splitedName;
    } catch (error) {
      console.log(error.message);
      await this.inputName();
    }
  }

  static async inputTryNumber() {
    try {
      const inputTryNumber = await InputView.readLineAsync(MESSAGE.INPUT.TRY_NUMBER);
      Validator.isEmpty(inputTryNumber);
      console.log(inputTryNumber);
      const parsedNumber = Number(inputTryNumber.trim());
      Validator.isNumber(parsedNumber);
      Validator.isRangeOver(parsedNumber, DEFINITION.MIN_GAME, DEFINITION.MAX_GAME);
      Validator.isDecimal(parsedNumber);
      return inputTryNumber;
    } catch (error) {
      console.log(error.message);
      await this.inputTryNumber();
    }
  }
}

export default InputController;
