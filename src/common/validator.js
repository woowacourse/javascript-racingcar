import { CAR } from './constants.js';

export function isValidCarNames(carNames) {
  return carNames.every((name) => {
    return name.length <= CAR.MAX_NAME_LENGTH;
  });
}

export function isValidRacingCount(racingCount) {
  return typeof racingCount === 'number' && racingCount > 0 && Number.isInteger(racingCount);
}
