import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constants/index.js';
import { CarValidator, RoundValidator } from '../models/index.js';
import { InputView, OutputView } from '../views/index.js';

const InputController = {
  async getCarName() {
    try {
      const result = await InputView.readInput(INPUT_MESSAGE.name);
      CarValidator.validate(result);
      return result;
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.getCarName();
    }
  },

  async getRoundNumber() {
    try {
      const result = await InputView.readInput(INPUT_MESSAGE.round);
      RoundValidator.validateRound(result);
      return result;
    } catch (error) {
      OutputView.printMessage(ERROR_MESSAGE);
      return this.getRoundNumber();
    }
  },
};

export default InputController;
