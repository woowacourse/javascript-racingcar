import {
  isCarNameBlank,
  isCarNameOverMaxLength,
  isCarNameDuplicated,
} from './carValid.js';
import {isCountNaN, isCountUnderMinCount, isCountFloat} from './countValid.js';
import {ERROR_MESSAGE} from '../constants/message.js';

export const getCarNameErrorMessage = (carNames) => {
  if (isCarNameBlank(carNames)) {
    return ERROR_MESSAGE.BLANK_CARNAME;
  }
  if (isCarNameOverMaxLength(carNames)) {
    return ERROR_MESSAGE.OVER_CARNAME_MAX_LENGTH;
  }
  if (isCarNameDuplicated(carNames)) {
    return ERROR_MESSAGE.DUPLICATE_CARNAME;
  }
};

export const getCountErrorMessage = (count) => {
  if (isCountNaN(count)) {
    return ERROR_MESSAGE.ISNAN_COUNT;
  }
  if (isCountUnderMinCount(count)) {
    return ERROR_MESSAGE.ZERO_OR_MINUS_COUNT;
  }
  if (isCountFloat(count)) {
    return ERROR_MESSAGE.FLOAT_COUNT;
  }
};
