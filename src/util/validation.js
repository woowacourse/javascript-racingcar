import ERROR from "../constant/error.js";
import { SPLITTER } from "../constant/constant.js";
import { MIN, MAX } from "../constant/range.js";

const validateCarNames = (carNames) => {
  const names = carNames.split(SPLITTER);

  validateLength(names);
  validateDuplicate(names);
};

const validateRaceCount = (raceCountInput) => {
  const raceCount = Number(raceCountInput);

  validateNumber(raceCount);
  validateInteger(raceCount);
  validateRange(raceCount);
};

const validateLength = (names) => {
  if (names.length < MIN.CAR_COUNT) {
    throw new Error(ERROR.MIN_CAR_COUNT);
  }

  names.forEach((name) => {
    if (name.length < MIN.NAME_LENGTH || name.length > MAX.NAME_LENGTH) {
      throw new Error(ERROR.NAME_LENGTH);
    }
  });
};

const validateRange = (raceCount) => {
  if (raceCount < MIN.RACE_COUNT) {
    throw new Error(ERROR.RACE_COUNT);
  }
};

const validateNumber = (raceCount) => {
  if (isNaN(raceCount)) {
    throw new Error(ERROR.RACE_COUNT_NUMBER);
  }
};

const validateInteger = (raceCount) => {
  if (!Number.isInteger(raceCount)) {
    throw new Error(ERROR.RACE_COUNT_INTEGER);
  }
};

const validateDuplicate = (carList) => {
  const uniqueCarNames = new Set(carList);

  if (uniqueCarNames.size !== carList.length) {
    throw new Error(ERROR.DUPLICATE_CAR_NAME);
  }
};

export { validateCarNames, validateRaceCount };
