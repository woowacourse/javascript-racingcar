import NUMBERS from './constants/number.js';
import MESSAGE from './constants/message.js';

import nameStringToArray from './utils/nameStringToArray.js';
import {
  isWithComma,
  hasValidLengthInArray,
  isUniqueWord,
  isOnlyNumbers,
  isNumberInRange,
} from './utils/validator.js';

const isCarNameInputValid = (value) => {
  if (!isWithComma(value)) {
    alert(MESSAGE.NOT_ENOUGH_INPUT_NAME);
    return false;
  }

  const names = nameStringToArray(value);
  console.log(value);
  if (
    !hasValidLengthInArray(
      names,
      NUMBERS.MIN_NAME_LENGTH,
      NUMBERS.MAX_NAME_LENGTH
    )
  ) {
    alert(MESSAGE.INVALID_NAME_LENGTH);
    return false;
  }

  if (!isUniqueWord(names)) {
    alert(MESSAGE.DUPLICATED_NAME_EXIST);
    return false;
  }

  return true;
};

const isRaceTimeValid = (value) => {
  if (!isOnlyNumbers(value) || !isNumberInRange(NUMBERS.MAX_RACE_TIME, value)) {
    alert(MESSAGE.INVALID_RACE_TIME);
    return false;
  }

  return true;
};

export { isCarNameInputValid, isRaceTimeValid };
