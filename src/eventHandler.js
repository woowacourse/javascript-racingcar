import Car from './game/Car.js';
import { ERROR, LIMIT } from './util/constants.js';

function isValidNames(names) {
  if (names.some(name => name.length > LIMIT.MAX_LENGTH)) {
    alert(ERROR.LONGER_THAN_FIVE);
    return false;
  }
  if (names.some(name => name.length < LIMIT.MIN_LENGTH)) {
    alert(ERROR.IS_BLANK);
    return false;
  }

  return true;
}

function generateCars(names) {
  const cars = [];

  names.forEach(name => {
    cars.push(new Car(name.trim()));
  });

  return cars;
}

export default function eventHandler() {
  document.querySelector('.name-form').addEventListener('submit', event => {
    event.preventDefault();
    const names = document.querySelector('.name-input').value.split(',');
    let cars = [];
    if (isValidNames(names)) {
      cars = generateCars(names);
    }
    console.log(cars);
  });
}
