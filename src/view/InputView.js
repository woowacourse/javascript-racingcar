import { NAME_DELIMITER } from '../constants/index.js';
import Console from '../utils/Console.js';
import Validator from '../utils/Validator.js';

const InputView = {
  close() {
    Console.close();
  },

  async readNames() {
    try {
      const input = await Console.read();
      Validator.checkNames(input);
      return input.split(NAME_DELIMITER);
    } catch (e) {
      InputView.error(e);
      return InputView.readNames();
    }
  },

  async readTryCount() {
    try {
      const input = await Console.read();
      Validator.checkIntegerNumber(input);
      return Number(input);
    } catch (e) {
      InputView.error(e);
      return InputView.readTryCount();
    }
  },
};

export default InputView;
