import { readLineAsync } from '../utils/ReadLine.js';

const InputView = {
  async readCarNames() {
    const input = await readLineAsync(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n'
    );
    return input;
  },

  async readTryCount() {
    const input = await readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return input;
  },
};
export default InputView;
