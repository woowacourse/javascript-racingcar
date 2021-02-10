import { carValidator } from "./carValidator.js";
import { countValidator } from "./countValidator.js";

class Validator {
  isCarValid(carNames) {
    return (
      carValidator.isCarNameOverMaxLength(carNames) &&
      carValidator.isCarNameBlank(carNames) &&
      carValidator.isCarNameDuplicate(carNames)
    );
  }

  isCountValid(count) {
    return (
      countValidator.isCountNumber(count) &&
      countValidator.isCountPositive(count) &&
      countValidator.isCountInteger(count)
    );
  }
}

export const validator = new Validator();
