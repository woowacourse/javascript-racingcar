import {
  renderCarNames,
  renderProgressArrow,
  renderWinners,
  renderRacingContainer,
  renderRestartButton,
  renderLoadingSpinner,
  disapearLoadingSpinner,
} from "../views/view.js";
import { raceState, allocateCars, clearState } from "../models/Race.js";

export function startRacing() {
  allocateCars();
  renderRacingContainer();
  renderCarNames();
  race(raceState.racingNumber);
}

function race(racingNumber) {
  renderLoadingSpinner();
  let racingNumberCount = 1;
  const intervalID = setInterval(() => {
    if (racingNumberCount > racingNumber) {
      disapearLoadingSpinner();
      renderWinners(pickWinner());
      renderRestartButton();
      clearState();
      clearInterval(intervalID);
      return;
    }
    disapearLoadingSpinner();
    moveForwardCars();
    renderLoadingSpinner();
    racingNumberCount++;
  }, 1000);
}

function moveForwardCars() {
  raceState.cars.forEach((car, index) => {
    if (car.canMoveFoward()) {
      car.moveForward();
      renderProgressArrow(index);
    }
  });
}

function pickWinner() {
  const maxLocation = getMaxLocation(raceState.cars);
  const winnerArr = getWinnerArr(maxLocation);
  return winnerArr.join(", ");
}

function getMaxLocation(arr) {
  return Math.max(...arr.map(({ location }) => location));
}

function getWinnerArr(max) {
  return raceState.cars
    .filter((car) => {
      return car.location === max;
    })
    .map((car) => {
      return car.name;
    });
}
