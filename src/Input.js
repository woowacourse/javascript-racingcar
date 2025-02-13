import { INPUT_MESSAGE } from "./Const.js";
import Output from "./Output.js";
import { readLineAsync } from "./Util.js";
import Validate from "./Validate.js";
class Input {
  #validate = new Validate();
  #output = new Output();

  async raceCarNames() {
    try {
      const name = await readLineAsync(INPUT_MESSAGE.raceCarNames);
      const names = name.split(",");

      names.forEach((name) => {
        this.#validate.isBelowLimit(name).isPositiveLength(name);
      });

      return names;
    } catch (e) {
      this.#output.printLine(e.message);
      return await this.raceCarNames();
    }
  }

  async raceCount() {
    try {
      const count = Number(await readLineAsync(INPUT_MESSAGE.raceCount));
      this.#validate.isPositiveNumber(count).isNumeric(count).isInteger(count);

      return count;
    } catch (e) {
      this.#output.printLine(e.message);
      return await this.raceCount();
    }
  }
}

export default Input;
