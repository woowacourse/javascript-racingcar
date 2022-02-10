import Car from './game/Car.js';
import playRace from './game/playRace.js';
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

function isValidCount(inputCount, cars) {
  if (cars.length === 0) {
    alert(ERROR.EMPTY_NAMES);
    return false;
  }
  if (+inputCount < LIMIT.MIN_LENGTH) {
    alert(ERROR.MIN_COUNT);
    return false;
  }
  return true;
}

function generateCars(names) {
  const cars = [];

  names.forEach(name => {
    cars.push(new Car(name));
  });

  return cars;
}

export default function eventHandler() {
  let cars = [];
  let count = 0;

  document.querySelector('.name-form').addEventListener('submit', event => {
    event.preventDefault();
    const names = document
      .querySelector('.name-input')
      .value.split(',')
      .map(name => name.trim());

    if (isValidNames(names)) {
      cars = generateCars(names);
    }
  });

  document.querySelector('.count-form').addEventListener('submit', event => {
    event.preventDefault();
    const inputCount = document.querySelector('.count-input').value;

    if (isValidCount(inputCount, cars)) {
      count = inputCount;
      playRace(cars, count);
    }
  });
}
