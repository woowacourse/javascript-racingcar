import { ERROR_TRY_COUNT_MESSAGE, MIN_TRY_COUNT, MAX_TRY_COUNT } from "../constants/constants.js";
import throwErrorIfInvalid from "../utils/throwErrorIfInvalid.js";

const parseTryCount = (input) => Number(input);

const isInvalidNumber = (tryCount) => Number.isNaN(tryCount);
const isNotInteger = (tryCount) => !Number.isInteger(tryCount);
const isOutOfRange = (tryCount) => tryCount < MIN_TRY_COUNT || tryCount > MAX_TRY_COUNT;

const validateTryCount = (input) => {
  const tryCount = parseTryCount(input);

  throwErrorIfInvalid(isInvalidNumber(tryCount), ERROR_TRY_COUNT_MESSAGE.INVALID_NUMBER);
  throwErrorIfInvalid(isNotInteger(tryCount), ERROR_TRY_COUNT_MESSAGE.INVAILD_INTEGER);
  throwErrorIfInvalid(isOutOfRange(tryCount), ERROR_TRY_COUNT_MESSAGE.INVALID_RANGE);

  return tryCount;
};

export default validateTryCount;
