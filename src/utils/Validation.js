import constants from './constants.js';

const Validation = {
  isValidCarNames(carNames) {
    return carNames.every((carName) => {
      let count = 0;
      // eslint-disable-next-line no-unused-vars
      for (const char of carName) {
        count += 1;
      }
      return this.isValidCarNameLength(count);
    });
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
