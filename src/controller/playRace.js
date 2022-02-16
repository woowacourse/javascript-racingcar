import { CAR_CAN_GO_COUNT } from '../util/constants.js';

import generateCars from '../model/generateCars.js';
import getWinners from '../model/getWinners.js';

import showResult from '../view/showResult.js';
import showWinners from '../view/showWinners.js';
import showRestart from '../view/showRestart.js';

function sortCars(cars) {
  return [...cars].sort((a, b) => b.position - a.position);
}

function isCarCanGo() {
  return Math.floor(Math.random() * 10) >= CAR_CAN_GO_COUNT;
}

export default function playRace(count) {
  const cars = generateCars();
  while (count) {
    cars.forEach(car => {
      if (isCarCanGo()) {
        car.go();
      }
    });
    count -= 1;
  }
  showResult(sortCars(cars));
  showWinners(getWinners(cars));
  showRestart();
}
