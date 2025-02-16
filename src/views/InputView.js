import ReadLineAsync from './ReadLineAsync.js';
import { Parser } from '../utils/Parser.js';
import MESSAGE from '../constants/Message.js';

class InputView {
  static async inputName() {
    const inputName = await ReadLineAsync.readLineAsync(MESSAGE.INPUT.NAME);
    const splittedName = Parser.splitName(inputName);
    return splittedName;
  }
  catch(error) {
    console.log(error.message);
  }

  static async inputTryNumber() {
    const inputTryNumber = await ReadLineAsync.readLineAsync(MESSAGE.INPUT.TRY_NUMBER);
    const parsedNumber = Number(inputTryNumber.trim());
    return parsedNumber;
  }
  catch(error) {
    console.log(error.message);
  }
}

export default InputView;
