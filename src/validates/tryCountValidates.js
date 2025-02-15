import { MAX_TRY_COUNT, MIN_TRY_COUNT } from '../constants/common.js';
import { ERROR_MESSAGE } from '../constants/message.js';

export function checkTryCountRange(tryCount) {
  if (tryCount < MIN_TRY_COUNT || tryCount > MAX_TRY_COUNT) throw new Error(ERROR_MESSAGE.TRY_COUNT_RANGE);
}

export function checkIsInteger(tryCount) {
  if (!Number.isInteger(tryCount)) throw new Error(ERROR_MESSAGE.TRY_COUNT_INTEGER);
}
