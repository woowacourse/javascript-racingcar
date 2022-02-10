import { Car } from '../models/Car.js';

export function race(state) {
  state.cars = state.cars.map((item) => {
    return new Car(item);
  });

  for (let i = 0; i < state.racingNumber; i++) {
    goForward(state);
  }
  console.log(state);
  console.log(pickWinner(state));
  const winners = pickWinner(state);
  let winnerString = '';
  winners.forEach((item, index) => {
    if (index !== 0) {
      winnerString += ', ';
    }
    winnerString += item;
  });
  console.log(winnerString);

  clearState(state);
}

function goForward(state) {
  for (let i = 0; i < state.cars.length; i++) {
    state.cars[i].moveFoward();
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
