export default function getWinners(cars) {
  const getCarPositions = cars.map(car => car.position);
  const maxPosition = Math.max.apply(null, getCarPositions);
  return cars.filter(car => car.position === maxPosition);
}
