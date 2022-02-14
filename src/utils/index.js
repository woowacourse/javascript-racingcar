const parseCarName = names => {
  return names.split(',').map(name => name.trim());
};

const validateCarNameLength = names => {
  return names.every(name => name.length <= 5 && name.length > 0);
};

const validateDuplicateCarName = names => {
  return new Set(names).size === names.length;
};

const validateRacingCount = count => {
  return count > 0;
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 9);
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

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
} 

export {
  parseCarName,
  validateCarNameLength,
  validateDuplicateCarName,
  validateRacingCount,
  generateRandomNumber,
  moveCars,
  getMaxCount,
  removeAllChildNodes
};
