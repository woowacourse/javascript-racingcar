import { GAME_NUMBERS, ALERT_MESSAGE } from './constants.js';

const hasInValidNameLength = (names) =>
  names.some((name) => name.length > GAME_NUMBERS.VALID_MAX_NAME_LENGTH);

const hasSpaceInName = (names) =>
  names.some((name) => Array.from(name).some((ch) => ch.match(/ /)));

const isDuplicatedCarName = (names) => names.length !== new Set(names).size;

const isEmptyName = (names) => names.some((name) => name.length === GAME_NUMBERS.EMPTY_NUMBER);

const isEmptyRacingCount = (count) => !count;

const isUnderZero = (count) => count <= 0;

const isOverCarsQuantityLimit = (names) => names.length > GAME_NUMBERS.CARS_QUANTITY_LIMIT;

const isOverRacingCountLimit = (count) => count > GAME_NUMBERS.RACING_COUNT_LIMIT;

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
  if (isOverCarsQuantityLimit(splitedCarNames)) {
    throw new Error(ALERT_MESSAGE.OVER_CAR_QUANTITY_LIMIT);
  }
};

export const checkValidRacingCount = (count) => {
  if (isEmptyRacingCount(count)) {
    throw new Error(ALERT_MESSAGE.EMPTY_COUNT_ERROR);
  }
  if (isUnderZero(count)) {
    throw new Error(ALERT_MESSAGE.INPUT_POSITIVE_NUMBER);
  }
  if (isOverRacingCountLimit(count)) {
    throw new Error(ALERT_MESSAGE.OVER_RACING_COUNT_LIMIT);
  }
};
