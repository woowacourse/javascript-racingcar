import { REGEX, RULES, SYMBOLS } from '../../statics/constants';

export const isInvalidCarName = carsNameInput => {
  const nameRegex = new RegExp(REGEX.carName);
  return !nameRegex.test(carsNameInput);
};

export const hasRedundantCarName = carsNameInput => {
  const splittedCarNames = carsNameInput.split(SYMBOLS.nameSeperator);
  const uniqueCarNames = new Set(splittedCarNames);
  return splittedCarNames.length !== uniqueCarNames.size;
};

export const hasSingleCar = carsNameInput => {
  const splittedCarNames = carsNameInput.split(SYMBOLS.nameSeperator);
  return splittedCarNames.length === 1;
};

export const isInvalidAttemptNum = attemptInput => {
  const attemptNumber = Number(attemptInput);

  return !Number.isInteger(attemptNumber) || attemptNumber < RULES.minAttemptNum;
};
