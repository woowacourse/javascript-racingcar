const parseCarName = names => names.split(',').map(name => name.trim());

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min)) + min;

const resetCars = cars => {
  cars.forEach(car => car.resetRacingCount());
};

const getCarsPositions = cars =>
  cars.map(car => {
    return { name: car.getName(), isMoved: car.move() };
  });

const getMaxCount = cars => {
  let maxCount = 0;
  for (let i = 0; i < cars.length; i += 1) {
    if (cars[i].racingCount >= maxCount) {
      maxCount = cars[i].racingCount;
    }
  }
  return maxCount;
};

export {
  parseCarName,
  generateRandomNumber,
  getCarsPositions,
  resetCars,
  getMaxCount,
};
