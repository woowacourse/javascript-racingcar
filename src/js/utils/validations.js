import { RACING_COUNT_RANGE, CAR_NAME_LENGTH_RANGE } from '../constants.js';

export function isValidCarNamesLength(carNameList) {
  return carNameList.every(
    (name) =>
      name.length >= CAR_NAME_LENGTH_RANGE.MIN &&
      name.length <= CAR_NAME_LENGTH_RANGE.MAX
  );
}

export function isDuplicatedCarName(carNameList) {
  return carNameList.length !== new Set(carNameList).size;
}

export function isOutOfRacingCountRange(racingCount) {
  return (
    !Number.isInteger(racingCount) ||
    racingCount < RACING_COUNT_RANGE.MIN ||
    racingCount > RACING_COUNT_RANGE.MAX
  );
}
