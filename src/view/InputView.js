import CONSTANT from "../CONSTANTS";
import Validator from "../domain/Validator";
import Console from "../utils/Console";

class InputView {
  static async readCarNames() {
    const answer = await Console.readLineAsync(CONSTANT.MESSAGE.carNameInput);

    const carNames = answer
      .split(CONSTANT.SEPARATOR.carName)
      .map((string) => string.trim());

    if (!Validator.validateCars(carNames))
      throw new Error(CONSTANT.MESSAGE.invalidCarName);
    return carNames;
  }

  static async readTryCount() {
    const answer = await Console.readLineAsync(CONSTANT.MESSAGE.tryCountInput);

    if (!Validator.validateTryCount(answer))
      throw new Error(CONSTANT.MESSAGE.invalidTryCount);
    return Number(answer);
  }
}

export default InputView;
