import SETTING from "../constants/Setting.js";
import REGEXP from "../constants/RegExp.js";
import {
  CarNameLengthError,
  CarNameDuplicatedError,
  CarNameTypeError,
  CarNameRangeError,
  AttemptTypeError,
  AttemptRangeError,
} from "../error/CustomError.js";

const validateCarNameLength = (input) => {
  if (
    input.length < SETTING.minCarNameLength ||
    input.length > SETTING.maxCarNameLength
  ) {
    throw new CarNameLengthError();
  }
};

const validateCarNameType = (input) => {
  if (!REGEXP.carName.test(input)) {
    throw new CarNameTypeError();
  }
};

export const validateCarName = (input) => {
  validateCarNameLength(input);
  validateCarNameType(input);
};

const validateCarNameRange = (inputArray) => {
  if (
    inputArray.length < SETTING.minCarCount ||
    inputArray.length > SETTING.maxCarCount
  ) {
    throw new CarNameRangeError();
  }
};

const validateCarNameDuplicated = (inputArray) => {
  if (inputArray.length !== new Set(inputArray).size) {
    throw new CarNameDuplicatedError();
  }
};

export const validateCarNameArray = (inputArray) => {
  validateCarNameRange(inputArray);
  validateCarNameDuplicated(inputArray);
};

const validateAttemptType = (attempt) => {
  attempt.split("").forEach((word) => {
    if (!REGEXP.attempt.test(word)) {
      throw new AttemptTypeError();
    }
  });
};

const validateAttemptRange = (attempt) => {
  if (
    Number(attempt) < SETTING.minAttempt ||
    Number(attempt) > SETTING.maxAttempt
  ) {
    throw new AttemptRangeError();
  }
};

export const validateAttempt = (input) => {
  const attempt = input.trim();
  validateAttemptType(attempt);
  validateAttemptRange(attempt);
};
