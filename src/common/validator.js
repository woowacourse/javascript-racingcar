import { CAR_NAME } from './constants.js';

export function isValidCarNames(carNames) {
  return carNames.every((name) => {
    return name.length <= CAR_NAME.MAX_LENGTH;
  });
}
