import Console from "../utils/Console";
import CONSTANT from "../constants";

class InputView {
  static async readCarNames() {
    const answer = await Console.readLineAsync(CONSTANT.MESSAGE.carNameInput);

    this.#validateCarNames(answer);

    return answer;
  }

  static async readTryCount() {
    const answer = await Console.readLineAsync(CONSTANT.MESSAGE.tryCountInput);

    this.#validateTryCount(answer);

    return answer;
  }

  static #validateCarNames(answer) {
    const carNames = answer
      .split(CONSTANT.SEPARATOR.carName)
      .map((string) => string.trim());

    if (!this.#isValidCarNames(carNames)) {
      throw new Error(CONSTANT.MESSAGE.invalidCarName);
    }
  }

  static #validateTryCount(answer) {
    if (!this.#isValidTryCount(answer)) {
      throw new Error(CONSTANT.MESSAGE.invalidTryCount);
    }
  }

  static #isValidCarNames(carNames) {
    const isValidLengthsOfNames = carNames.every(
      (name) =>
        name.length >= CONSTANT.NUMERIC.carNameLengthLower &&
        name.length <= CONSTANT.NUMERIC.carNameLengthUpper
    );
    const isNotDuplicated = carNames.length === new Set(carNames).size;

    return isValidLengthsOfNames && isNotDuplicated;
  }

  static #isValidTryCount(tryCount) {
    return /^[0-9]+$/.test(tryCount);
  }
}

export default InputView;
