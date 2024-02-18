import { LINE_BREAK, MESSAGE } from '../constant/message';
import readLineAsync from '../util/readLineAsync';

const InputView = {
  async readCarNameList() {
    const carNameListInput = await readLineAsync(`${MESSAGE.CAR_NAME_LIST_INPUT}${LINE_BREAK}`);
    return carNameListInput.split(',').map((car) => car.trim());
  },

  async readTurnCount() {
    const turnCountInput = await readLineAsync(`${MESSAGE.TURN_COUNT_INPUT}${LINE_BREAK}`);
    return turnCountInput;
  },
};

export default InputView;
