const {
  MINIMUM_NUMBER_OF_CARS,
  ERROR_MESSAGE,
  CAR_NAME_LENGTH,
  REGEX,
  MINIMUM_TRY_COUNT,
} = require("../constant/Constants");
const {
  MINIMUM_CAR_COUNT,
  NAME_DUPLICATE,
  NAME_LENGTH_LIMIT,
  INVALID_NAME,
  NOT_BLANK,
  NOT_POSITIVE_NUMBER,
} = ERROR_MESSAGE;
const { MINIMUM_CAR_NAME_LENGTH, MAXIMUM_CAR_NAME_LENGTH } = CAR_NAME_LENGTH;
const { ALPHABET_VALID_KOREAN_NUMBER, BLANK, ONLY_NUMBER } = REGEX;

class Validator {
  isEnoughNumberOfCars(number) {
    if (number < MINIMUM_NUMBER_OF_CARS) {
      throw new Error(MINIMUM_CAR_COUNT);
    }
  }

  hasDuplicate(names) {
    if (names.length !== new Set(names).size) {
      throw new Error(NAME_DUPLICATE);
    }
  }

  isValidCarName(name) {
    if (
      name.length < MINIMUM_CAR_NAME_LENGTH ||
      MAXIMUM_CAR_NAME_LENGTH < name.length
    ) {
      throw new Error(NAME_LENGTH_LIMIT);
    }

    if (ALPHABET_VALID_KOREAN_NUMBER.test(name)) {
      throw new Error(INVALID_NAME);
    }
  }

  hasBlank(name) {
    if (BLANK.test(name)) {
      throw new Error(NOT_BLANK);
    }
  }

  isStringNumber(number) {
    if (ONLY_NUMBER.test(number)) {
      throw new Error(NOT_POSITIVE_NUMBER);
    }
  }

  isValidTryCount(count) {
    this.isStringNumber(count);

    if (count < MINIMUM_TRY_COUNT) {
      throw new Error(NOT_POSITIVE_NUMBER);
    }
  }
}

const validator = new Validator();

const inputCarNameValidator = (carNames) => {
  validator.isEnoughNumberOfCars(carNames.length);
  validator.hasDuplicate(carNames);

  carNames.forEach((name) => {
    validator.hasBlank(name);
    validator.isValidCarName(name);
  });
};

const tryCountValidator = (count) => {
  validator.hasBlank(count);
  validator.isValidTryCount(count);
};

module.exports = { inputCarNameValidator, tryCountValidator };
