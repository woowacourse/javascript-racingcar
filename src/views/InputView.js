import Validator from '../Validator';
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
    const carNameListInput = await readLineAsync('경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n');
    return carNameListInput.split(',').map((car) => car.trim());
  },

  async readTurnCount() {
    const turnCount = await readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return turnCount;
  },
};

export default InputView;
