import { INPUT_MESSAGE } from "../Const.js";
import Output from "./Output.js";
import { readLineAsync } from "../Util.js";
import Validate from "../Validate.js";
class Input {
  #validate = new Validate();
  #output = new Output();

  async raceCarNames() {
    try {
      const raceCarName = await readLineAsync(INPUT_MESSAGE.raceCarNames);
      const raceCarNames = raceCarName.split(",");

      raceCarNames.forEach((raceCarName) => {
        this.#validate.isBelowLimit(raceCarName).isPositiveLength(raceCarName);
      });

      return raceCarNames;
    } catch (e) {
      this.#output.printLine(e.message);
      return await this.raceCarNames();
    }
  }

  async raceCount() {
    try {
      const raceCount = Number(await readLineAsync(INPUT_MESSAGE.raceCount));
      this.#validate
        .isPositiveNumber(raceCount)
        .isNumeric(raceCount)
        .isInteger(raceCount);

      return raceCount;
    } catch (e) {
      this.#output.printLine(e.message);
      return await this.raceCount();
    }
  }
}

export default Input;
