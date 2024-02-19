import { INPUT_MESSAGE } from '../constant/index.js';
import { CarValidator, Round } from '../domain/index.js';
import { InputView, OutputView } from '../view/index.js';

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

      return new Round(result);
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.getRoundNumber();
    }
  },
};

export default InputController;
