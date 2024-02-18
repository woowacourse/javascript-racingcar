import { MESSAGE } from '../constants/message';
import readLineAsync from '../utils/readLineAsync';

const InputView = {
  async readCarNameList() {
    const carNameListInput = await readLineAsync(MESSAGE.CAR_NAME_LIST_INPUT);
    return carNameListInput.split(',').map((car) => car.trim());
  },

  async readTurnCount() {
    const turnCountInput = await readLineAsync(MESSAGE.TURN_COUNT_INPUT);
    return turnCountInput;
  },
};

export default InputView;
