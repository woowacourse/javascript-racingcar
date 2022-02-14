import {
  renderCarNames,
  renderProgressArrow,
  renderWinners,
  renderRacingContainer,
} from "../views/view.js";
import { state, allocateCars, clearState } from "../models/Race.js";

export function startRacing() {
  allocateCars();
  renderRacingContainer();
  renderCarNames();
  for (let i = 0; i < state.racingNumber; i++) {
    race();
  }
  renderWinners(pickWinner());
  clearState();
}

function race() {
  state.cars.forEach((car, index) => {
    if (car.canMoveFoward()) {
      car.moveForward();
      renderProgressArrow(index);
    }
  });
}

function pickWinner() {
  const maxLocation = getMaxLocation(state.cars);
  const winnerArr = getWinnerArr(maxLocation);
  return winnerArr.join(", ");
}

function getMaxLocation(arr) {
  return Math.max(...arr.map(({ location }) => location));
}

function getWinnerArr(max) {
  return state.cars
    .filter((car) => {
      return car.location === max;
    })
    .map((car) => {
      return car.name;
    });
}
