import readLineAsync from '../utils/readLineAsync';

const InputView = {
  async readCarNames() {
    const inputValue = await readLineAsync(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분\n',
    );
    return inputValue;
  },

  async readRoundCount() {
    const inputValue = await readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return inputValue;
  },
};

export default InputView;
