import CONDITIONS from '../constant/Conditions.js';
import { ERROR_MESSAGES } from '../constant/messages.js';
import CustomError from './customError.js';

const ValidatorCondtion = {
  carCountRange(carCount) {
    if (carCount < CONDITIONS.minCarCount || carCount > CONDITIONS.maxCarCount) {
      throw new CustomError(ERROR_MESSAGES.invalidCarCountRange);
    }
  },

  carNameEmpty(carNames) {
    if (carNames.some((carName) => carName === '')) {
      throw new CustomError(ERROR_MESSAGES.carNameEmpty);
    }
  },

  carNameDuplicate(carNames) {
    const uniqueCarNames = new Set(carNames);
    if (uniqueCarNames.size !== carNames.length) {
      throw new CustomError(ERROR_MESSAGES.carNameDuplicate);
    }
  },

  carNameLength(carNames) {
    if (carNames.some((carName) => carName.length > CONDITIONS.maxCarNameLength)) {
      throw new CustomError(ERROR_MESSAGES.invalidCarNameLength);
    }
  },

  isNaN(value) {
    if (!CONDITIONS.numericPattern.test(value)) {
      throw new CustomError(ERROR_MESSAGES.NaN);
    }
  },

  tryCountRange(tryCount) {
    if (tryCount < CONDITIONS.minTryCount || tryCount > CONDITIONS.maxTryCount) {
      throw new CustomError(ERROR_MESSAGES.invalidTryCountRange);
    }
  },
};

const Validator = {
  carNames(carNames) {
    ValidatorCondtion.carCountRange(carNames.length);
    ValidatorCondtion.carNameLength(carNames);
    ValidatorCondtion.carNameEmpty(carNames);
    ValidatorCondtion.carNameDuplicate(carNames);
  },

  tryCount(tryCount) {
    ValidatorCondtion.isNaN(tryCount);
    ValidatorCondtion.tryCountRange(tryCount);
  },
};

export default Validator;
