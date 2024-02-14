import Console from '../utils/Console';

class InputView {
  static async readCarsName() {
    const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분). \n');
    return input;
  }

  static async readAttemptNum() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요? \n');
    return input;
  }
}

export default InputView;
