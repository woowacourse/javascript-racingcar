import { INPUT_MESSAGE } from "../const.js";
import Output from "./Output.js";
import { readLineAsync } from "../util.js";
import NameValidate from "../validate/NameValidate.js";
import NumberValidate from "../validate/NumberValidate.js";
class Input {
  #numberValidate = new NumberValidate();
  #nameValidate = new NameValidate();
  #output = new Output();

  async raceCarNames() {
    try {
      const raceCarName = await readLineAsync(INPUT_MESSAGE.raceCarNames);
      const raceCarNames = raceCarName.split(",");

      raceCarNames.forEach((raceCarName) => {
        this.#nameValidate
          .isLimitLength(raceCarName)
          .isPositiveLength(raceCarName);
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
      this.#numberValidate
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
