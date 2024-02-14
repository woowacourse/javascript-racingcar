import Console from './utils/Console';

const InputView = {
  async queryCarName() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).'
    );
    return carNames;
  },

  async queryTryCount() {
    const tryCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    return tryCount;
  },
};

export default InputView;
