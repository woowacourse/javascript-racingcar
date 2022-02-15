const parseCarName = names => names.split(',').map(name => name.trim());

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min)) + min;

const resetCars = cars => {
  cars.forEach(car => car.resetRacingCount());
};

const moveCars = (cars, count) => {
  cars.forEach(car => {
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

export { parseCarName, generateRandomNumber, moveCars, resetCars, getMaxCount };
