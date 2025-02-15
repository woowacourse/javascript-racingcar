import ERROR from '../constant/error.js';
import { SPLITTER, MIN, MAX } from '../constant/constant.js';

const validateCarNames = (carNames) => {
  const names = carNames.split(SPLITTER);

  validateLength(names);
  validateNameOverlap(names);
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

  if (names.length > MAX.CAR_COUNT) {
    throw new Error(ERROR.MAX_CAR_COUNT);
  }

  names.forEach((name) => {
    if (name.length < MIN.NAME_LENGTH || name.length > MAX.NAME_LENGTH) {
      throw new Error(ERROR.NAME_LENGTH);
    }
  });
};

const validateNameOverlap = (names) => {
  if (names.length !== new Set(names).size) {
    throw new Error(ERROR.NAME_OVERLAP);
  }
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

  if (typeof raceCount === 'number' && Number.MAX_SAFE_INTEGER < raceCount) {
    throw new Error(ERROR.RACE_COUNT_OVER_MAX_SAFE_INTEGER);
  }
};

export { validateCarNames, validateRaceCount };
