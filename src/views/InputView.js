import Console from '../utils/Console';

const InputView = {
  async readInput(query) {
    const input = await Console.readLineAsync(query);
    return input;
  },

  async readCarNames() {
    const carNames = await this.readInput(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).',
    );

    return carNames;
  },

  async readTryCount() {
    const tryCount = await this.readInput('시도할 횟수는 몇 회인가요?');
    return tryCount;
  },
};

export default InputView;
