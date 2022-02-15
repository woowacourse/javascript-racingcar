import {
  renderCarNames,
  renderProgressArrow,
  renderWinners,
  renderRacingContainer,
  renderRestartButton,
} from "../views/view.js";
import { state, allocateCars, clearState } from "../models/Race.js";

export function startRacing() {
  allocateCars();
  renderRacingContainer();
  renderCarNames();
  race(state.racingNumber);
}

function race(racingNumber) {
  let racingNumnerCount = 1;
  const intervalID = setInterval(function () {
    if (racingNumnerCount > racingNumber) {
      renderWinners(pickWinner());
      renderRestartButton();
      clearState();
      clearInterval(intervalID);
      return;
    }
    moveForwardCars();
    racingNumnerCount++;
  }, 1000);
}

function moveForwardCars() {
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
