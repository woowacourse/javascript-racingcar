export const getMaxPosition = cars => {
  const getCarPositions = cars.map(car => car.position);
  return Math.max(...getCarPositions);
};

export const getWinners = cars => {
  return cars.filter(car => car.position === getMaxPosition(cars)).map(car => car.name);
};
