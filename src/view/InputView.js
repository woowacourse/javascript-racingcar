import { readLineAsync, retryUntilSuccess } from '../utils.js';
import Validator from '../validator.js';

export default class InputView {
  static async getNameList() {
    return retryUntilSuccess(async () => {
      const rawName = await readLineAsync(
        '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
      );
      return rawName;

    });
  }

  static async getCount() {
    return retryUntilSuccess(async () => {
      const rawCount = await readLineAsync('시도할 횟수는 몇 회인가요?\n');
      return rawCount;
    });
  }
}
