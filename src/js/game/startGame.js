import { isEffectiveScore } from './isEffectiveScore.js';
import { getRandomNumber } from '../utils/getRandomNumber.js';
import { printGameResult } from './printGameResult.js';
import { toggleVisibility } from '../utils/toggleVisibility.js';
import { GAME } from '../utils/constant.js';

const arrowTemplate = () => {
  return `<div class="forward-icon mt-2">⬇️️</div>`;
};

const updateRacingCount = (cars) => {
  cars.forEach(($car) => {
    const isForward = isEffectiveScore(
      getRandomNumber(GAME.MIN_SCORE, GAME.MAX_SCORE),
    );
    if (isForward) {
      $car.dataset.forwardCount = Number($car.dataset.forwardCount) + 1;
      $car.parentNode.insertAdjacentHTML('beforeend', arrowTemplate());
    }
  });
};

export const startGame = async (racingCount) => {
  const cars = document.querySelectorAll('.car-player');

  const gameProcess = await setInterval(() => {
    if (racingCount-- === 1) {
      clearInterval(gameProcess);
    }
    updateRacingCount(cars);
  }, 1000);

  setTimeout(() => {
    toggleVisibility('$gameResultSection');
    printGameResult();
  }, racingCount * 1000);
};
