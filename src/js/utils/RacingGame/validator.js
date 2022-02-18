import GAME_SETTING from '../../constants/RacingGame/setting.js';
import ERROR_MESSAGE from '../../constants/error-message.js';

import nameStringToArray from '../nameStringToArray.js';
import { isNaturalNumber, isWithComma, isArrayItemLengthRange, isUniqueWord } from '../isValid.js';

export const isCarNameValid = (value) => {
  if (!isWithComma(value)) {
    alert(ERROR_MESSAGE.CAR_NAME_MULTIPLE_INPUT);
    return false;
  }

  const names = nameStringToArray(value);
  const { CAR_NAME_LENGTH_MIN, CAR_NAME_LENGTH_MAX } = GAME_SETTING;
  if (!isArrayItemLengthRange(names, CAR_NAME_LENGTH_MIN, CAR_NAME_LENGTH_MAX)) {
    alert(ERROR_MESSAGE.CAR_NAME_LENGTH_RANGE);
    return false;
  }

  if (!isUniqueWord(names)) {
    alert(ERROR_MESSAGE.CAR_NAME_UNIQUE);
    return false;
  }

  return true;
};

export const isRaceTimeValid = (value) => {
  if (!isNaturalNumber(value)) {
    alert(ERROR_MESSAGE.RACE_TIME_ONLY_NUMBER);
    return false;
  }

  return true;
};

export const isGameSetup = (round, carList) => round > 0 && carList > 0;
