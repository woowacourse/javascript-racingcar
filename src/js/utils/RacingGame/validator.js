import GAME_SETTING from '../../constants/RacingGame/setting.js';
import ERROR_MESSAGE from '../../constants/error-message.js';

import { nameStringToArray, getRandomNumber } from '../data-manager.js';
import {
  isNaturalNumber,
  isWithComma,
  isArrayItemLengthRange,
  isUniqueWord,
} from '../validator.js';

const isCarNameValid = (value) => {
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

const isRaceTimeValid = (value) => {
  if (!isNaturalNumber(value)) {
    alert(ERROR_MESSAGE.RACE_TIME_ONLY_NUMBER);
    return false;
  }

  return true;
};

const isGameSetup = (round, carList) => round > 0 && carList > 0;

const isAdvance = () => {
  const { ADVANCE_RANGE_MIN, ADVANCE_RANGE_MAX, ADVANCE_NUMBER } = GAME_SETTING;
  return getRandomNumber(ADVANCE_RANGE_MIN, ADVANCE_RANGE_MAX) >= ADVANCE_NUMBER;
};

export { isCarNameValid, isRaceTimeValid, isGameSetup, isAdvance };
