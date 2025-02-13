import { ERROR_TRY_COUNT_MESSAGE } from "../constants/constants.js";

const validateTryCount = (input) => {
  const tryCount = Number(input);

  if (Number.isNaN(tryCount)) throw new Error(ERROR_TRY_COUNT_MESSAGE.INVALID_NUMBER);
  if (!Number.isInteger(tryCount)) throw new Error(ERROR_TRY_COUNT_MESSAGE.INVAILD_INTEGER);
  if (tryCount <= 0) throw new Error(ERROR_TRY_COUNT_MESSAGE.INVALID_RANGE);

  return tryCount;
};

export default validateTryCount;
