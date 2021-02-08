import { isEffectiveScore } from '../utils/isEffectiveScore.js';
import { getRandomNumber } from '../utils/getRandomNumber.js';
import { printGameResult } from './printGameResult.js';
import { toggleVisibility as setVisible } from '../utils/toggleVisibility.js';

export const startGame = (racingCount) => {
  playAllGame(racingCount);
  setVisible('gameResultSection');
  printGameResult();
};

const playAllGame = (racingCount) => {
  const cars = document.querySelectorAll('.car-player');

  for (let i = 0; i < racingCount; i++) {
    playOneGame(cars);
  }
};

const playOneGame = (cars) => {
  cars.forEach(($car) => {
    if (!isEffectiveScore(getRandomNumber())) {
      return;
    }
    $car.dataset.forwardCount = Number($car.dataset.forwardCount) + 1;
    insertArrowHTML($car);
  });
};

const insertArrowHTML = ($car) => {
  $car.parentNode.insertAdjacentHTML('beforeEnd', arrowTemplate());
};

const arrowTemplate = () => {
  return `<div class="forward-icon mt-2">⬇️️</div>`;
};
