import { CAR } from './constants.js';

export function isNotDuplicate(carNames) {
  const carNamesSet = new Set(carNames);

  return carNames.length === carNamesSet.size;
}

export function isValidCarNamesLength(carNames) {
  return carNames.every((name) => {
    return CAR.MIN_NAME_LENGTH <= name.length && name.length <= CAR.MAX_NAME_LENGTH;
  });
}

export function isValidCarNames(carNames) {
  return isNotDuplicate(carNames) && isValidCarNamesLength(carNames);
}

export function isValidRacingCount(racingCount) {
  return typeof racingCount === 'number' && racingCount > 0 && Number.isInteger(racingCount);
}
