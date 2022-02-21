import { ALERT_MESSAGE, GAME_NUMBERS } from '../constant/index.js';

export const hasInValidNameLength = (names) =>
  names.some((name) => name.length > GAME_NUMBERS.VALID_MAX_NAME_LENGTH);

export const hasSpaceInName = (names) =>
  names.some((name) => Array.from(name).some((ch) => ch.match(/ /)));

export const isDuplicatedCarName = (names) =>
  names.length !== new Set(names).size;

export const isEmptyName = (names) =>
  names.some((name) => name.length === GAME_NUMBERS.EMPTY_NUMBER);

export const isEmptyRacingCount = (count) => !count;

export const checkValidCarNames = (splitedCarNames) => {
  if (hasSpaceInName(splitedCarNames)) {
    throw new Error(ALERT_MESSAGE.HAS_EMPTY_NAME_ERROR);
  }
  if (isDuplicatedCarName(splitedCarNames)) {
    throw new Error(ALERT_MESSAGE.DUPLICATED_NAME_ERROR);
  }
  if (isEmptyName(splitedCarNames)) {
    throw new Error(ALERT_MESSAGE.EMPTY_NAME_ERROR);
  }
  if (hasInValidNameLength(splitedCarNames)) {
    throw new Error(ALERT_MESSAGE.HAS_INVALID_NAME_LENGTH_ERROR);
  }
};

export const checkValidRacingCount = (count) => {
  if (isNaN(count)) {
    throw new Error(ALERT_MESSAGE.NOT_A_NUMBER_ERROR);
  }
  if (Number(count) < 0) {
    throw new Error(ALERT_MESSAGE.NEGATIVE_COUNT_ERROR);
  }
  if (isEmptyRacingCount(count)) {
    throw new Error(ALERT_MESSAGE.EMPTY_COUNT_ERROR);
  }
};
