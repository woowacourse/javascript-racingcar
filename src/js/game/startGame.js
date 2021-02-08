import { isEffectiveScore } from '../utils/isEffectiveScore.js';
import { getRandomNumber } from '../utils/getRandomNumber.js';
import { printGameResult } from './printGameResult.js';
import { toggleVisibility as setVisible } from '../utils/toggleVisibility.js';

export const startGame = (racingCount) => {
  const $cars = document.querySelectorAll('.car-player');

  resetGame($cars);
  playAllGame($cars, racingCount);
  setVisible('$gameResultSection');
  printGameResult();
};

const resetGame = ($cars) => {
  clearCarScore($cars);
  clearResidueArrow();
};

const clearCarScore = ($cars) => {
  $cars.forEach(($car) => ($car.dataset.forwardCount = '0'));
};

const clearResidueArrow = () => {
  const $arrows = document.querySelectorAll('.forward-icon');

  $arrows.forEach(($arrow) => $arrow.remove());
};

const playAllGame = ($cars, racingCount) => {
  for (let i = 0; i < racingCount; i++) {
    playOneGame($cars);
  }
};

const playOneGame = ($cars) => {
  $cars.forEach(($car) => {
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
