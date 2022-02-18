import { CAR } from './constants.js';

export function isCarNotAlone(carNames) {
  return carNames.length !== 1;
}

export function isCarNameNotDuplicate(carNames) {
  return carNames.length === new Set(carNames).size;
}

export function isValidCarNamesLength(carNames) {
  return carNames.every((name) => {
    return CAR.MIN_NAME_LENGTH <= name.length && name.length <= CAR.MAX_NAME_LENGTH;
  });
}

export function isValidCarNames(carNames) {
  return (
    isCarNotAlone(carNames) && isCarNameNotDuplicate(carNames) && isValidCarNamesLength(carNames)
  );
}

export function isValidRacingCount(racingCount) {
  return typeof racingCount === 'number' && racingCount > 0 && Number.isInteger(racingCount);
}
