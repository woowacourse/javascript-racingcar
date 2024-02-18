import CONSTANT from "../CONSTANTS";

const { NUMERIC } = CONSTANT;

class Validator {
  static validateCars(cars) {
    return (
      cars.every(
        (name) =>
          name.length >= NUMERIC.carNameLengthLower &&
          name.length <= NUMERIC.carNameLengthUpper
      ) && cars.length === new Set(cars).size
    );
  }

  static validateTryCount(tryCount) {
    return /^[0-9]+$/.test(tryCount);
  }
}

export default Validator;
