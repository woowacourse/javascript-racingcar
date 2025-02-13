export function getWinner(cars) {
  const maxPosition = Math.max(...cars.map((car) => car.position));
  const winner = cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name)
    .join(", ");
  return winner;
}
