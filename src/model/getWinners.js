function setCarPosition(cars) {
  const arrowContainers = document.querySelectorAll('.result-arrow-container');

  const carPosition = [];
  arrowContainers.forEach(arrowContainer => {
    carPosition.push(arrowContainer.childElementCount);
  });

  cars.forEach((car, idx) => {
    car.position = carPosition[idx];
  });
}

export default function getWinners(cars) {
  setCarPosition(cars);
  const getCarPositions = cars.map(car => car.position);
  const maxPosition = Math.max.apply(null, getCarPositions);
  return cars.filter(car => car.position === maxPosition).map(car => car.name);
}
