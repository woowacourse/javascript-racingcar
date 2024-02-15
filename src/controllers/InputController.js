import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constants/Message.js';
import { CarValidator, RoundValidator } from '../models/index.js';
import { InputView, OutputView } from '../views/index.js';

const InputController = {
  async getCarName() {
    let result;
    try {
      const value = await InputView.readInput(INPUT_MESSAGE.name);

      CarValidator.confirm(value);

      result = value;
    } catch (error) {
      OutputView.printMessage(error.message);

      await this.getCarName();
    }
    return result;
  },

  async getRoundNumber() {
    let result;
    try {
      const value = await InputView.readInput(INPUT_MESSAGE.round);
      RoundValidator.confirmRound(value);

      result = value;
    } catch (error) {
      OutputView.printMessage(ERROR_MESSAGE);
      await this.getRoundNumber();
    }
    return result;
  },
};

export default InputController;
