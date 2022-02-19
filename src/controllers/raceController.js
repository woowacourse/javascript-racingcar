import {
  renderCarNames,
  renderProgressArrow,
  renderWinners,
  renderRacingContainer,
  renderRestartButton,
  renderLoadingSpinner,
  hideLoadingSpinner,
} from "../views/view.js";
import { raceState, allocateCars, clearState } from "../models/Race.js";
import { LOADING_TERM } from "../constants/conditions.js";

export function startRacing() {
  allocateCars();
  renderRacingContainer();
  renderCarNames();
  progressRacing(raceState.roundCount);
}

function progressRacing(roundCount) {
  renderLoadingSpinner();
  let progressCount = 1;
  const intervalID = setInterval(() => {
    if (progressCount > roundCount) {
      const winners = pickWinners();
      hideLoadingSpinner();
      renderWinners(winners);
      renderRestartButton();
      showCongraturationAlert(winners);
      clearState();
      clearInterval(intervalID);
      return;
    }
    hideLoadingSpinner();
    showMoveForwardCars();
    renderLoadingSpinner();
    progressCount++;
  }, LOADING_TERM);
}

function showMoveForwardCars() {
  raceState.cars.forEach((car, index) => {
    if (car.canMoveForward()) {
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
