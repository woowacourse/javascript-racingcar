import { MIN_CAR_COUNT, MAX_CAR_NAME, MIN_CAR_NAME } from '../constants/common.js';
import { ERROR_MESSAGE } from '../constants/message.js';

export function checkIsEmpty(carName) {
  if (carName.trim().length === 0) throw new Error(ERROR_MESSAGE.CAR_NAME_EMPTY);
}

export function checkCarNameLength(carName) {
  if (carName.length < MIN_CAR_NAME || carName.length > MAX_CAR_NAME) throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH);
}

export function checkCarNameDuplicate(carNames) {
  const carNameSet = new Set(carNames);

  if (carNameSet.size !== carNames.length) throw new Error(ERROR_MESSAGE.CAR_NAME_DUPLICATED);
}

export function checkCarCount(carNames) {
  if (carNames.length < MIN_CAR_COUNT) throw new Error(ERROR_MESSAGE.CAR_NAME_MIN);
}
