import { isEffectiveScore } from './isEffectiveScore.js';
import { getRandomNumber } from '../utils/getRandomNumber.js';
import { printGameResult } from './printGameResult.js';
import { toggleVisibility } from '../utils/toggleVisibility.js';
import { GAME } from '../utils/constant.js';

const hiddenWaitRacingAnimation = () => {
  const $spinnerContainers = document.querySelectorAll('.spinner-container');

  $spinnerContainers.forEach(($spinnerContainer) =>
    $spinnerContainer.setAttribute('hidden', true),
  );
};

const setWaitRacingAnimation = (racingDurationTime) => {
  const startTime = new Date().getTime();

  const paintAnimation = () => {
    const currentTime = new Date().getTime();

    if (currentTime - racingDurationTime > startTime) {
      hiddenWaitRacingAnimation();
    } else {
      requestAnimationFrame(paintAnimation);
    }
  };
  requestAnimationFrame(paintAnimation);
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
  const racingDurationTime = racingCount * 1000;

  setWaitRacingAnimation(racingDurationTime);
  const gameProcess = setInterval(() => {
    if (racingCount-- === 1) {
      clearInterval(gameProcess);
    }
    updateRacingCount(cars);
  }, 1000);

  setTimeout(() => {
    toggleVisibility('$gameResultSection');
    printGameResult();
  }, racingDurationTime);
};
