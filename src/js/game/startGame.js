import { isEffectiveScore } from './isEffectiveScore.js';
import { getRandomNumber } from '../utils/getRandomNumber.js';
import { printGameResult } from './printGameResult.js';
import { GAME } from '../utils/constant.js';
import { setVisibility } from '../utils/setAttribute.js';

const setHiddenWaitRacingAnimation = () => {
  const $spinnerContainers = document.querySelectorAll('.spinner-container');

  $spinnerContainers.forEach(($spinnerContainer) =>
    setVisibility($spinnerContainer, false),
  );
};

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
      $car.insertAdjacentHTML('afterend', arrowTemplate());
    }
  });
};

export const startGame = (racingCount) => {
  const cars = document.querySelectorAll('.car-player');
  const $gameResultSection = document.querySelector('#game-result-section');
  const totalRacingDurationTime = racingCount * 1000;

  const gameProcess = setInterval(() => {
    if (racingCount-- === 1) {
      clearInterval(gameProcess);
    }
    updateRacingCount(cars);
  }, 1000);

  setTimeout(() => {
    setVisibility($gameResultSection, true);
    setHiddenWaitRacingAnimation();
    printGameResult();
  }, totalRacingDurationTime);
};
