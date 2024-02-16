import Validator from '../Validator';
import { MESSAGE } from '../constants';
import readLineAsync from '../utils/readLineAsync';
import OutputView from './OutputView';

const InputView = {
  async readCarNameList() {
    let carNameList = [];
    let isValid = false;

    while (!isValid) {
      try {
        carNameList = await this.getCarNameInput();
        Validator.validateCarNameList(carNameList);
        isValid = true;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
    return carNameList;
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
