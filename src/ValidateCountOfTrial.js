const { ERROR, MIN_COUNT_OF_TRIAL } = require("./constants");

const ValidateCountOfTrial = {
  validate(countOfTrial) {
    this.validateIsNotANumber(countOfTrial);
    this.validateRaceCount(countOfTrial);
  },

  validateIsNotANumber(countOfTrial) {
    if (this.countOfTrialIsNaN(countOfTrial)) {
      throw ERROR.COUNT_OF_TRIAL_SHOULD_BE_NUMBER;
    }
  },

  countOfTrialIsNaN(countOfTrial) {
    return !/\d/g.test(countOfTrial);
  },

  validateRaceCount(countOfTrial) {
    if (countOfTrial < MIN_COUNT_OF_TRIAL) {
      throw ERROR.COUNT_OF_TRIAL_UNDER_ONE;
    }
  },
};

module.exports = ValidateCountOfTrial;
