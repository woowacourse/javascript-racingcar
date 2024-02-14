import readLineAsync from '../utils/readLineAsync.js';

class InputView {
  #CAR_NAMES_PROMPT = '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n';
  #TRY_COUNT_PROMPT = '시도할 횟수는 몇 회인가요?\n';

  readCarNames() {
    return readLineAsync(this.#CAR_NAMES_PROMPT);
  }

  readTryCount() {
    return readLineAsync(this.#TRY_COUNT_PROMPT);
  }
}

export default InputView;
