import { CAR } from './constants.js';

export function isValidCarNames(carNames) {
  return carNames.every((name) => {
    return name.length <= CAR.MAX_NAME_LENGTH;
  });
}

export function isValidRacingCount(racingCount) {
  // console.log(typeof racingCount);
  // console.log(racingCount > 0);
  // console.log(Number.isInteger(racingCount));
  return typeof racingCount === 'number' && racingCount > 0 && Number.isInteger(racingCount);
}
