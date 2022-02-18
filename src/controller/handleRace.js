import generateCars from '../model/generateCars.js';
import { getWinners, getMaxPosition } from '../model/getWinners.js';
import { showArrowProgress, showCarElements } from '../view/showProgress.js';
import { showRestart, showWinners } from '../view/showResult.js';
import hideLoader from '../view/hideLoader.js';
import wait from '../utils/wait.js';
import { ALERT_WINNER_DELAY, DELAY, WINNER_MESSAGE } from '../utils/constants.js';

const finishRace = async cars => {
  const winner = getWinners(cars);
  showWinners(winner);
  showRestart();
  await wait(ALERT_WINNER_DELAY);
  alert(`${[...winner] + WINNER_MESSAGE}`);
};

const playRace = (cars, count) => {
  while (count) {
    cars.forEach(car => car.go());
    count -= 1;
  }
  showCarElements(cars);
  showArrowProgress();
};

const handleRace = async count => {
  const cars = generateCars();
  playRace(cars, +count);
  await wait((getMaxPosition(cars) + 1) * DELAY);
  hideLoader();
  finishRace(cars);
};

export default handleRace;
