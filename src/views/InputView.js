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
};

export default InputView;
