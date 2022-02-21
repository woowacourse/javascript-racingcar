import generateCars from '../model/generateCars.js';
import { isNumber } from '../util/typeCheck.js';
import showResult from '../view/showResult.js';

function sortCars(cars) {
  return cars.sort((a, b) => b.position - a.position);
}

export default function playRace(count) {
  if (!isNumber(count)) return;
  const cars = generateCars();
  for (let i = 0; i < count; i += 1) {
    cars.forEach(car => car.go());
  }
  showResult(sortCars(cars), count);
}
