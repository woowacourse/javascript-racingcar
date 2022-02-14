import ERROR from '../constants/error.js';
import GAME_SETTING from '../constants/setting.js';
import nameStringToArray from './nameStringToArray.js';

function isOnlyNumbers(value) {
  return /^[0-9]*$/g.test(value) && value > 0;
}

function isWithComma(value) {
  return value.indexOf(',') > -1;
}

function isArrayItemLengthRange(values, min, max) {
  return values.every((item) => item.length >= min && item.length <= max);
}

function isUniqueWord(values) {
  return values.length === new Set(values).size;
}

export const isCarNameValid = (value) => {
  if (!isWithComma(value)) {
    alert(ERROR.CAR_NAME_MULTIPLE_INPUT);
    return false;
  }

  const names = nameStringToArray(value);
  const { CAR_NAME_LENGTH_MIN, CAR_NAME_LENGTH_MAX } = GAME_SETTING;
  if (
    !isArrayItemLengthRange(names, CAR_NAME_LENGTH_MIN, CAR_NAME_LENGTH_MAX)
  ) {
    alert(ERROR.CAR_NAME_LENGTH_RANGE);
    return false;
  }

  if (!isUniqueWord(names)) {
    alert(ERROR.CAR_NAME_UNIQUE);
    return false;
  }

  return true;
};

export const isRaceTimeValid = (value) => {
  if (!isOnlyNumbers(value)) {
    alert(ERROR.RACE_TIME_ONLY_NUMBER);
    return false;
  }

  return true;
};
