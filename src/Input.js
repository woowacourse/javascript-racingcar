import { readLineAsync } from "./Util.js";
import Validate from "./Validate.js";
class Input {
  async raceCarNames() {
    const validate = new Validate();
    try {
      const name = await readLineAsync(
        "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n"
      );
      const names = name.split(",");
      names.forEach((name) => {
        validate.isBelowLimit(name).isPositiveLength(name);
      });

      return names;
    } catch (e) {
      console.log(e.message);
      return await this.raceCarNames();
    }
  }

  async raceCount() {
    try {
      const validate = new Validate();
      const count = Number(await readLineAsync("시도할 횟수는 몇 회인가요?\n"));

      validate.isPositiveNumber(count).isNumeric(count).isInteger(count);

      return count;
    } catch (e) {
      console.log(e.message);
      return await this.raceCount();
    }
  }
}

export default Input;
