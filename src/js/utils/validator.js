import { GAME_NUMBERS, ALERT_MESSAGE } from './constants.js';

const hasInValidNameLength = (names) =>
  names.some((name) => name.length > GAME_NUMBERS.VALID_MAX_NAME_LENGTH);

const hasSpaceInName = (names) =>
  names.some((name) => Array.from(name).some((ch) => ch.match(/ /)));

const isDuplicatedCarName = (names) => names.length !== new Set(names).size;

const isEmptyName = (names) => names.some((name) => name.length === GAME_NUMBERS.EMPTY_NUMBER);

const isEmptyRacingCount = (count) => !count;

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
  if (isEmptyRacingCount(count)) {
    throw new Error(ALERT_MESSAGE.EMPTY_COUNT_ERROR);
  }
};
