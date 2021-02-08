import { isEffectiveScore } from './isEffectiveScore.js';
import { getRandomNumber } from '../utils/getRandomNumber.js';
import { printGameResult } from './printGameResult.js';
import { toggleVisibility } from '../utils/toggleVisibility.js';

const arrowTemplate = () => {
  return `<div class="forward-icon mt-2">⬇️️</div>`;
};

const updateRacingCount = (cars) => {
  cars.forEach(($car) => {
    const isForward = isEffectiveScore(getRandomNumber());

    if (isForward) {
      $car.dataset.forwardCount = Number($car.dataset.forwardCount) + 1;
      $car.parentNode.insertAdjacentHTML('beforeend', arrowTemplate());
    }
  });
};

export const startGame = (racingCount) => {
  const cars = document.querySelectorAll('.car-player');

  for (let i = 0; i < racingCount; i++) {
    updateRacingCount(cars);
  }

  toggleVisibility('$gameResultSection');
  printGameResult();
};
