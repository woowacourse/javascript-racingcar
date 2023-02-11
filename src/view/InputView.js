import Console from '../utils/Console.js';

const InputView = {
  async readCarNames() {
    const input = await Console.read(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).'
    );
    return input.split(',');
  },

  async readTryCount() {
    const input = await Console.read('시도할 회수는 몇회인가요?');
    return +input;
  },
};

export default InputView;
