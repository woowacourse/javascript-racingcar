import { readLineAsync } from "../utils/ConsoleUtil.js";

class InputView {
  static async readCarNames() {
    return await readLineAsync(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분)." + "\n"
    );
  }

  static async readRoundNumber() {
    return await readLineAsync("시도할 횟수는 몇 회인가요?" + "\n");
  }
}

export default InputView;
