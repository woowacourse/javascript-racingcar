import { MESSAGE } from '../constants';
import readLineAsync from '../utils/readLineAsync';
import { carValidator } from '../domain/validator';
import OutputView from './OutputView';
import raceCountValidator from '../domain/validator/raceCountValidator';

const InputView = {
  async readCarNameList() {
    try {
      const carNameList = await this.getCarNameInput();
      carValidator.validateCarNameList(carNameList);
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

  async readRaceCount() {
    try {
      const raceCountInput = await readLineAsync(MESSAGE.RACE_COUNT_INPUT);
      raceCountValidator.validateRaceCount(raceCountInput);
      return parseInt(raceCountInput, 10);
    } catch (error) {
      OutputView.print(error.message);
      return this.readRaceCount();
    }
  },
};

export default InputView;
