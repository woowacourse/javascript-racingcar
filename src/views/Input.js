import readLineAsync from "../utils/readLineAsync.js";
import validateCarNames from "../validation/validateCarNames.js";

const Input = {
  async carName() {
    try {
      const input = await readLineAsync(
        "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
      );
      return validateCarNames(input);
    } catch (error) {
      console.log(error.message);
      return this.carName();
    }
  },
  tryCount() {
    try {
      const input = readLineAsync("시도할 횟수는 몇 회인가요?\n");
      return validateTryCount(input);
    } catch (error) {
      console.log(error.message);
      return this.tryCount();
    }
  },
};

export default Input;
