import { Car } from '../models/Car.js';
import { renderCarNames, renderProgressArrow, renderWinners } from '../views/view.js';
import { state } from '../models/state.js';

export function race() {
  allocateCars();
  renderCarNames();

  moveCars();

  renderWinners(pickWinner());

  clearState();
}

function allocateCars() {
  state.cars = state.cars.map((item) => {
    return new Car(item);
  });
}

function moveCars() {
  for (let i = 0; i < state.racingNumber; i++) {
    goForward();
  }
}

function goForward() {
  for (let i = 0; i < state.cars.length; i++) {
    if (state.cars[i].moveFoward()) {
      renderProgressArrow(i);
    }
  }
}

function pickWinner() {
  const maxLocation = getMaxLocation(state.cars);
  const winnerArr = getWinnerArr(maxLocation);
  return makeArrToString(winnerArr);
}

function clearState() {
  state.cars = [];
  state.racingNumber = 0;
}

function getMaxLocation(arr) {
  let maxLocation = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].location >= maxLocation) {
      maxLocation = arr[i].location;
    }
  }
  return maxLocation;
}

function getWinnerArr(max) {
  let winnerArr = [];
  for (let i = 0; i < state.cars.length; i++) {
    if (state.cars[i].location === max) {
      winnerArr.push(state.cars[i].name);
    }
  }
  return winnerArr;
}

function makeArrToString(arr) {
  let string = '';
  arr.forEach((item, index) => {
    if (index !== 0) {
      string += ', ';
    }
    string += item;
  });
  return string;
}
