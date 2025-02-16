import { INPUT_MESSAGE } from "../Const.js";
import Output from "./Output.js";
import Validate from "../Validate.js";
import readLineAsync from "../ReadLineAsync.js";
class Input {
  #validate = new Validate();

  async raceCarNames() {
    try {
      const raceCarName = await readLineAsync(
        INPUT_MESSAGE.raceCarNames + Output.printNewLine()
      );
      const raceCarNames = raceCarName.split(",");

      raceCarNames.forEach((raceCarName) => {
        this.#validate.isLiminLength(raceCarName).isPositiveLength(raceCarName);
      });

      return raceCarNames;
    } catch (e) {
      Output.printLine(e.message);
      return await this.raceCarNames();
    }
  }

  async raceCount() {
    try {
      const raceCount = Number(
        await readLineAsync(INPUT_MESSAGE.raceCount + Output.printNewLine())
      );
      this.#validate
        .isPositiveNumber(raceCount)
        .isNumeric(raceCount)
        .isInteger(raceCount);

      return raceCount;
    } catch (e) {
      Output.printLine(e.message);
      return await this.raceCount();
    }
  }
}

export default Input;
