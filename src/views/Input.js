import Console from "../utils/Console.js";
import validateCarNames from "../validation/validateCarNames.js";
import validateTryCount from "../validation/validateTryCount.js";

const Input = {
  async carName() {
    try {
      const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n");
      return validateCarNames(input);
    } catch (error) {
      Console.printErrorMessage(error.message);
      return this.carName();
    }
  },
  async tryCount() {
    try {
      const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      return validateTryCount(input);
    } catch (error) {
      Console.printErrorMessage(error.message);
      return this.tryCount();
    }
  },
};

export default Input;
