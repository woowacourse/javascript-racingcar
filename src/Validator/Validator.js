import {
  ERROR_MESSAGE,
  MAXIMUM_CAR_NAME_LENGTH,
  MINIMUM_TRY_COUNT,
  MINIMUM_NUMBER_OF_CARS,
  MINIMUM_CAR_NAME_LENGTH,
} from "../Utils/Constants.js";

const {
  NAME_LENGTH_LIMIT,
  NOT_BLANK,
  INVALID_NAME,
  NAME_DUPLICATE,
  MINIMUM_CAR_COUNT,
  NOT_POSITIVE_NUMBER,
} = ERROR_MESSAGE;

class Validator {
  carName(name) {
    if (
      name.length > MAXIMUM_CAR_NAME_LENGTH ||
      name.length < MINIMUM_CAR_NAME_LENGTH
    ) {
      throw new Error(NAME_LENGTH_LIMIT);
    }
    if (/[^a-zA-Z0-9가-힣]/.test(name)) {
      throw new Error(INVALID_NAME);
    }
  }

  checkDuplicate(names) {
    if (names.length !== new Set(names).size) {
      throw new Error(NAME_DUPLICATE);
    }
  }

  hasBlank(string) {
    if (/ /.test(string)) {
      throw new Error(NOT_BLANK);
    }
  }

  isNumber(number) {
    if (isNaN(number) || number.includes("e")) {
      throw new Error(NOT_POSITIVE_NUMBER);
    }
  }

  numberOfCars(number) {
    if (number < MINIMUM_NUMBER_OF_CARS) {
      throw new Error(MINIMUM_CAR_COUNT);
    }
  }

  tryCount(count) {
    this.isNumber(count);

    if (count < MINIMUM_TRY_COUNT) {
      throw new Error(NOT_POSITIVE_NUMBER);
    }
  }
}

const validator = new Validator();

const inputCarNameValidator = (cars) => {
  validator.numberOfCars(cars.length);
  validator.checkDuplicate(cars);

  cars.forEach((car) => {
    validator.carName(car);
    validator.hasBlank(car);
  });
};

const tryCountValidator = (count) => {
  validator.hasBlank(count);
  validator.tryCount(count);
};

export { inputCarNameValidator, tryCountValidator };
