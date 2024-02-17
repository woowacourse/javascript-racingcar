import { TRY_CONSTANTS } from "../Constants/Constants";
import { ERROR_MESSAGES } from "../Constants/Messages";
import AppError from "../utils/Error";

const { INVALID_TYPE, INVALID_RANGE } = ERROR_MESSAGES;
const { TRY_RANGE } = TRY_CONSTANTS;

const TryNumValidator = (() => {
  const checkIsNum = (tryNum) => {
    if (Number.isNaN(Number(tryNum))) {
      throw new AppError(INVALID_TYPE);
    }
  };

  const checkRange = (tryNum) => {
    if (Number(tryNum) < TRY_RANGE.min || Number(tryNum) > TRY_RANGE.max) {
      throw new AppError(INVALID_RANGE);
    }
  };

  return {
    checkTryNum: (tryNum) => {
      checkIsNum(tryNum);
      checkRange(tryNum);
    },
  };
})();

export default TryNumValidator;
