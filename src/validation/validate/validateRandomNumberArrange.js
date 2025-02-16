import runValidators from '../../utils/runValidators.js';
import throwError from '../../utils/throwError.js';
import { RANDOM_ERROR_MESSAGES } from '../../constants/Constants.js';
import isValidRandomNumber from '../isValid/isValidRandomNumber.js';

const validateInteger = (value) => {
  if (!isValidRandomNumber.integer(value)) {
    throwError(RANDOM_ERROR_MESSAGES.NOT_INTEGER);
  }
};

const validateMaxGreaterThanMin = (value) => {
  if (!isValidRandomNumber.maxGreaterThanMin(value)) {
    throwError(RANDOM_ERROR_MESSAGES.MIN_GREATER_THAN_MAX);
  }
};

const validateRandomNumberArrange = (value) =>
  runValidators([validateInteger, validateMaxGreaterThanMin], value);

export default validateRandomNumberArrange;
