import calcWordCount from './calcWordCount.js';
import constants from './constants.js';

const Validation = {
  isValidCarNames(carNames) {
    return carNames.every((carName) =>
      this.isValidCarNameLength(calcWordCount(carName))
    );
  },

  isValidTryCount(tryCount) {
    return Number.isInteger(tryCount) && tryCount >= constants.MIN_TRY_COUNT;
  },

  isValidCarNameLength(carNameLength) {
    return (
      carNameLength >= constants.MIN_CAR_NAME_LENGTH &&
      carNameLength <= constants.MAX_CAR_NAME_LENGTH
    );
  },
};
export default Validation;
