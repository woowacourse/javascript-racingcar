const Console = require("./utils/Console");
const {
  ERROR,
  NAME_MAX_LENGTH,
  NAME_MIN_LENGTH,
  MIN_PARTICIPATE,
  MIN_COUNT_OF_TRIAL,
} = require("./utils/constants");

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
        carName.length >= NAME_MAX_LENGTH
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

  validateNumberOfTrial(numberOfTrial) {
    this.validateNotANumber(numberOfTrial);
    this.validateRaceCount(numberOfTrial);
  },

  validateNotANumber(numberOfTrial) {
    if (!/\d/g.test(numberOfTrial)) {
      Console.print(ERROR.COUNT_OF_TRIAL_NOT_A_NUMBER);
      throw new Error();
    }
  },

  validateRaceCount(numberOfTrial) {
    if (numberOfTrial < MIN_COUNT_OF_TRIAL) {
      Console.print(ERROR.COUNT_OF_TRIAL_UNDER_ONE);
      throw new Error();
    }
  },
};

module.exports = Validation;
