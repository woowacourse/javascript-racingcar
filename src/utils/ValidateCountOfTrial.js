const { ERROR, MIN_COUNT_OF_TRIAL, REGEX_NUMBER } = require("../constants");

const ValidateCountOfTrial = {
  validate(countOfTrial) {
    this.validateIsNotANumber(countOfTrial);
    this.validateRaceCount(countOfTrial);
  },

  validateIsNotANumber(countOfTrial) {
    if (this.countOfTrialIsNaN(countOfTrial)) return;
    throw ERROR.COUNT_OF_TRIAL_IS_ONLY_NUMBER;
  },

  countOfTrialIsNaN(countOfTrial) {
    return REGEX_NUMBER.test(countOfTrial);
  },

  validateRaceCount(countOfTrial) {
    if (countOfTrial >= MIN_COUNT_OF_TRIAL) return;
    throw ERROR.COUNT_OF_TRIAL_UNDER_ONE;
  },
};

module.exports = ValidateCountOfTrial;
