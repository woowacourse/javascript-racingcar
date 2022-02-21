const getWinners = cars => {
  const getCarPositions = cars.map(car => car.position);
  const maxPosition = Math.max(...getCarPositions);
  return cars.filter(car => car.position === maxPosition).map(car => car.name);
};

export default getWinners;
