import generateCars from '../model/generateCars.js';
import showResult, { showWinners, showRestart } from '../view/showResult.js';
import getWinners from '../model/getWinners.js';

function sortCars(cars) {
  return cars.sort((a, b) => b.position - a.position);
}

export default function playRace(count) {
  const cars = generateCars();
  for (let i = 0; i < +count; i += 1) {
    cars.forEach(car => car.go());
  }

  showResult(sortCars(cars));
  showWinners(getWinners(cars));
  showRestart();
}
