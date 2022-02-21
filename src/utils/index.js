import {
  NAME_LENGTH,
  MIN_RACING_COUNT,
  MAX_RANDOM_NUMBER,
} from '../constants.js';

const parseCarName = names => names.split(',').map(name => name.trim());

const validateCarNameLength = names =>
  names.every(
    name => name.length <= NAME_LENGTH.MAX && name.length >= NAME_LENGTH.MIN,
  );

const validateDuplicateCarName = names => new Set(names).size === names.length;

const validateRacingCount = count => count >= MIN_RACING_COUNT;

const generateRandomNumber = () =>
  Math.floor(Math.random() * MAX_RANDOM_NUMBER);

const convertToId = id => `#${id}`;

const getMaxCount = cars => {
  let maxCount = 0;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].racingCount >= maxCount) {
      maxCount = cars[i].racingCount;
    }
  }
  return maxCount;
};

export {
  parseCarName,
  validateCarNameLength,
  validateDuplicateCarName,
  validateRacingCount,
  generateRandomNumber,
  getMaxCount,
  convertToId,
};
