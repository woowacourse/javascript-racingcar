import showResult from '../view/showResult.js';

function sortCars(cars) {
  return cars.sort((a, b) => b.position - a.position);
}

export default function playRace(cars, count) {
  for (let i = 0; i < +count; i += 1) {
    cars.forEach(car => car.go());
  }

  showResult(sortCars(cars));
}
