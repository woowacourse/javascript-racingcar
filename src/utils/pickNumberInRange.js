import { ERROR_MESSAGES } from '../constants/car-race';

const validateRange = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error(ERROR_MESSAGES.invalidNumberType);
  }

  if (min > max) {
    throw new Error(ERROR_MESSAGES.invalidNumberRange);
  }
};

const pickNumberInRange = (min, max) => {
  validateRange(min, max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default pickNumberInRange;
