import { Car } from '../models/Car.js';
import { renderCarNames, renderProgressArrow, renderWinners } from '../views/view.js';

export function race(state) {
  state.cars = state.cars.map((item) => {
    return new Car(item);
  });

  renderCarNames();
  for (let i = 0; i < state.racingNumber; i++) {
    goForward(state);
  }
  const winners = pickWinner(state);
  let winnerString = '';
  winners.forEach((item, index) => {
    if (index !== 0) {
      winnerString += ', ';
    }
    winnerString += item;
  });
  renderWinners(winnerString);
  clearState(state);
}

function goForward(state) {
  for (let i = 0; i < state.cars.length; i++) {
    if (state.cars[i].moveFoward()) {
      renderProgressArrow(i);
    }
  }
}

function pickWinner(state) {
  let max = 0;
  let winnerArr = [];
  for (let i = 0; i < state.cars.length; i++) {
    if (state.cars[i].location >= max) {
      max = state.cars[i].location;
    }
  }

  for (let i = 0; i < state.cars.length; i++) {
    if (state.cars[i].location === max) {
      winnerArr.push(state.cars[i].name);
    }
  }
  return winnerArr;
}

function clearState(state) {
  state.cars = [];
  state.racingNumber = 0;
}
