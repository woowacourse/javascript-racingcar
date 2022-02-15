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
  progressRacing(raceState.racingNumber);
}

function progressRacing(racingNumber) {
  renderLoadingSpinner();
  let racingNumberCount = 1;
  const intervalID = setInterval(() => {
    if (racingNumberCount > racingNumber) {
      const winners = pickWinners();
      disapearLoadingSpinner();
      renderWinners(winners);
      renderRestartButton();
      showCongraturationAlert(winners);
      clearState();
      clearInterval(intervalID);
      return;
    }
    disapearLoadingSpinner();
    showMoveForwardCars();
    renderLoadingSpinner();
    racingNumberCount++;
  }, 1000);
}

function showMoveForwardCars() {
  raceState.cars.forEach((car, index) => {
    if (car.canMoveFoward()) {
      car.moveForward();
      renderProgressArrow(index);
    }
  });
}

function pickWinners() {
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

function showCongraturationAlert(winners) {
  setTimeout(() => {
    alert(`우승자는 ${winners}입니다. 축하합니다 🎉`);
  }, 2000);
}
