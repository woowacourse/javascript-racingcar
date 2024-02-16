import Validator from '../Validator';
import { MESSAGE } from '../constants';
import readLineAsync from '../utils/readLineAsync';
import OutputView from './OutputView';

const InputView = {
  async readCarNameList() {
    try {
      const carNameList = await this.getCarNameInput();
      Validator.validateCarNameList(carNameList);
      return carNameList;
    } catch (error) {
      OutputView.print(error.message);
      return this.readCarNameList();
    }
  },

  async getCarNameInput() {
    const carNameListInput = await readLineAsync(MESSAGE.CAR_NAME_LIST_INPUT);
    return carNameListInput.split(',').map((car) => car.trim());
  },

  async readTurnCount() {
    try {
      const turnCountInput = await readLineAsync(MESSAGE.TURN_COUNT_INPUT);
      Validator.validateTurnCount(turnCountInput);
      return parseInt(turnCountInput, 10);
    } catch (error) {
      OutputView.print(error.message);
      return this.readTurnCount();
    }
  },
};

export default InputView;
