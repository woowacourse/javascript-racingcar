const { ERROR_MESSAGE } = require("../Utils/Constants");
const {
  NAME_LENGTH_LIMIT,
  MINIMUM_CAR_COUNT,
  MAXIMUM_CAR_NAME_LENGTH,
  MINIMUM_TRY_COUNT,
  MINIMUM_NUMBER_OF_CARS,
} = ERROR_MESSAGE;

class Validator {
  carName(name) {
    if (name.length > MAXIMUM_CAR_NAME_LENGTH) {
      throw new Error(NAME_LENGTH_LIMIT);
    }
    if (/[^a-z|A-Z|0-9|가-힣]/g.test(name)) {
      throw new Error(INVALID_NAME);
    }
  }

  hasBlank(string) {
    if (!/ /g.test(string)) {
      throw new Error(NOT_BLANK);
    }
  }

  isNumber(number) {
    if (number.includes("e")) {
      throw new Error(NOT_POSITIVE_NUMBER);
    }
    if (isNaN(number)) {
      throw new Error(NOT_POSITIVE_NUMBER);
    }
  }

  numberOfCars(number) {
    this.isNumber(number);

    if (number < MINIMUM_NUMBER_OF_CARS) {
      throw new Error(MINIMUM_CAR_COUNT);
    }
  }

  tryCount(count) {
    this.isNumber(number);

    if (count < MINIMUM_TRY_COUNT) {
      throw new Error(NOT_POSITIVE_NUMBER);
    }
  }
}
