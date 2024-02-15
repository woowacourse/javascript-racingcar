import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constants/Message.js';
import { CarValidator, RoundValidator } from '../models/index.js';
import { InputView, OutputView } from '../views/index.js';

const InputController = {
  async getCarName() {
    let result;
    try {
      const value = await InputView.readInput(INPUT_MESSAGE.name);
      //유효성 검사 : 통과하지 못하면 throw Error
      CarValidator.confirm(value);

      result = value;
    } catch (error) {
      OutputView.printMessage(error.message);

      this.getCarName();
    }

    return result;
  },

  async getRoundNumber() {
    let result;
    try {
      const value = await InputView.readInput(INPUT_MESSAGE.round);
      //유효성 검사 -> 통과 못하면 throw error
      RoundValidator.confirmRound(value);

      result = value;
    } catch (error) {
      OutputView.printMessage(ERROR_MESSAGE);

      this.getRoundNumber();
    }

    return result;
  },
};

export default InputController;
