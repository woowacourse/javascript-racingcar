import { readLineAsync } from '../utils/ReadLine';

export const InputView = {
  async readCarNames() {
    const input = await readLineAsync(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n'
    );
    return input;
  },
};
