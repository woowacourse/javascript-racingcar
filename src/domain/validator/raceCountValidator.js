import { CONFIG, ERROR_MESSAGE } from '../../constants';

const raceCountValidator = {
  validateRaceCount(raceCountInput) {
    const raceCount = parseFloat(raceCountInput);

    this.validateNumber(raceCount);
    this.validateFloatNumber(raceCount);
    this.validateNaturalNumber(raceCount);
  },

  validateFloatNumber(raceCount) {
    if (!Number.isInteger(raceCount)) {
      throw new Error(ERROR_MESSAGE.RACE_COUNT_IS_FLOAT_NUMBER);
    }
  },

  validateNumber(raceCount) {
    if (Number.isNaN(raceCount)) {
      throw new Error(ERROR_MESSAGE.RACE_COUNT_IS_NOT_NUMBER);
    }
  },

  validateNaturalNumber(raceCount) {
    if (raceCount < CONFIG.MIN_TURN_COUNT) {
      throw new Error(ERROR_MESSAGE.RACE_COUNT_IS_NOT_NATURAL_NUMBER);
    }
  },
};

export default raceCountValidator;
