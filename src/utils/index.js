import { RACING_COUNT, NAME_LENGTH } from '../constants.js';

const parseCarName = names => names.split(',').map(name => name.trim());

const validateCarNameLength = names =>
  names.every(
    name => name.length >= NAME_LENGTH.MIN && name.length <= NAME_LENGTH.MAX,
  );

const validateDuplicateCarName = names => new Set(names).size === names.length;

const validateRacingCount = count =>
  count >= RACING_COUNT.MIN && count <= RACING_COUNT.MAX;

const generateRandomNumber = () => Math.floor(Math.random() * 9);

const resetCars = cars => {
  cars.map(car => car.resetRacingCount());
};

const moveCars = (cars, count) => {
  cars.map(car => {
    for (let i = 0; i < count; i++) {
      car.move();
    }
  });
};

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
  moveCars,
  resetCars,
  getMaxCount,
};
