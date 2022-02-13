const parseCarName = names => names.split(',').map(name => name.trim());

const validateCarNameLength = names =>
  names.every(name => name.length <= 5 && name.length > 0);

const validateDuplicateCarName = names => new Set(names).size === names.length;

const validateRacingCount = count => count >= 1 && count <= 1000;

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
