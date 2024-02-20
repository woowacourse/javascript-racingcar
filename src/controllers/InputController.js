import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constants/index.js';
import { CarValidator, RoundValidator } from '../domain/index.js';
import { InputView, OutputView } from '../view/index.js';

const InputController = {
  async getCarName() {
    try {
      const result = await InputView.readInput(INPUT_MESSAGE.name);
      CarValidator.confirm(result);
      return result;
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.getCarName();
    }
  },

  async getRoundNumber() {
    try {
      const result = await InputView.readInput(INPUT_MESSAGE.round);
      RoundValidator.confirmRound(result);
      return result;
    } catch (error) {
      OutputView.printMessage(ERROR_MESSAGE);
      return this.getRoundNumber();
    }
  },
};

export default InputController;