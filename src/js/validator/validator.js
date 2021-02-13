import CarValidator from "./carValidator.js";
import CountValidator from "./countValidator.js";

class Validator {
  constructor() {
    this.carValidator = new CarValidator();
    this.countValidator = new CountValidator();
  }

  isCarValid(carNames) {
    return (
      this.carValidator.isCarNameBlank(carNames) &&
      this.carValidator.isCarNameOverMaxLength(carNames) &&
      this.carValidator.isCarNameDuplicate(carNames)
    );
  }

  isCountValid(count) {
    return (
      this.countValidator.isCountNumber(count) &&
      this.countValidator.isCountPositive(count) &&
      this.countValidator.isCountInteger(count)
    );
  }
}

export default Validator;
