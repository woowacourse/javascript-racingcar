import ERROR from "../constants/Error.js";
import SETTING from "../constants/Setting.js";

export const attemptValidation = {
  validateAttemptType(attemptInput) {
    if (!Number.isInteger(Number(attemptInput))) {
      throw new Error(ERROR.attemptType);
    }
  },

  validateAttemptRange(attemptInput) {
    if (
      Number(attemptInput) < SETTING.minAttempt ||
      Number(attemptInput) > SETTING.maxAttempt
    ) {
      throw new Error(ERROR.attemptRange);
    }
  },

  validateAttempt(attemptInput) {
    const trimedAttempt = attemptInput.trim();
    this.validateAttemptType(trimedAttempt);
    this.validateAttemptRange(trimedAttempt);
  },
};
