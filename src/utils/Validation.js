import constants from './constants';

const Validation = {
  isValidCarNames(carNames) {
    return carNames.every(
      (name) =>
        name.length >= constants.MIN_CAR_NAME_LENGTH &&
        name.length <= constants.MAX_CAR_NAME_LENGTH
    );
  },

  isValidTryCount(tryCount) {
    return Number.isInteger(tryCount) && tryCount >= constants.MIN_TRY_COUNT;
  },
};
export default Validation;
