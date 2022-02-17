import { Car } from '../models/Car.js';
import {
  renderCarNames,
  renderWinners,
  renderProgressArrowOfState,
  renderSpinnerForOneRound,
  eraseSpinner,
} from '../views/view.js';
import { state } from '../models/state.js';

export function race() {
  allocateCars();
  renderCarNames();
  moveCars();
  renderWinners(pickWinner());
  renderSpinnerForOneRound();
  renderProgressArrowOfState();
  eraseSpinner();
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
    state.cars[i].moveFoward();
  }
}

function pickWinner() {
  const maxLocation = getMaxLocation(state.cars);
  const winnerArr = getWinnerArr(maxLocation);
  return makeArrToString(winnerArr);
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
  return arr.join(', ');
}

export function clearState() {
  state.cars = [];
  state.racingNumber = 0;
}
