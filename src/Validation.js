const Console = require('./utils/Console');
const {
  ERROR,
  NAME_MAX_LENGTH,
  NAME_MIN_LENGTH,
  MIN_PARTICIPATE,
  MIN_TRYCOUNT,
} = require('./utils/constants');

const Validation = {
  validateCarName(carNames) {
    this.validateCarNameLength(carNames);
    this.validateCarNameDuplicated(carNames);
    this.validateIsRace(carNames);
  },

  validateCarNameLength(carNames) {
    carNames.forEach((carName) => {
      if (
        carName.length <= NAME_MIN_LENGTH ||
        carName.length > NAME_MAX_LENGTH
      ) {
        Console.print(ERROR.CAR_NAME_LENGTH);
        throw new Error();
      }
    });
  },

  validateCarNameDuplicated(carNames) {
    const carSet = new Set(carNames);
    if (carNames.length !== carSet.size) {
      Console.print(ERROR.CAR_NAME_DUPLICATED);
      throw new Error();
    }
  },

  validateIsRace(carNames) {
    if (carNames.length < MIN_PARTICIPATE) {
      Console.print(ERROR.NOT_A_RACE);
      throw new Error();
    }
  },

  validateTryCount(tryCount) {
    this.validateNotANumber(tryCount);
    this.validateRaceCount(tryCount);
  },

  validateNotANumber(tryCount) {
    if (!/\d/g.test(tryCount)) {
      Console.print(ERROR.TRYCOUNT_NOT_A_NUMBER);
      throw new Error();
    }
  },

  validateRaceCount(tryCount) {
    if (tryCount < MIN_TRYCOUNT) {
      Console.print(ERROR.TRYCOUNT_UNDER_ONE);
      throw new Error();
    }
  },
};

module.exports = Validation;
