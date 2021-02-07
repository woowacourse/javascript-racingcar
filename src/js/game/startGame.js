// 경주 진행될 때 전진하는 차에 표시해줄 화살표 템플릿
//<div class="forward-icon mt-2">⬇️️</div>

import { isEffectiveScore } from '../utils/isEffectiveScore';
import { getRandomNumber } from '../utils/getRandomNumber';

const arrowTemplate = () => {
  return `<div class="forward-icon mt-2">⬇️️</div>`;
};

const updateRacingCount = (cars) => {
  cars.forEach(($car) => {
    let isForward = isEffectiveScore(getRandomNumber());
    if (isForward) {
      $car.dataset['forward-count'] += 1;
      $car.parentNode.insertAdjacentHTML('beforeend', arrowTemplate());
    }
  });
};

export const startGame = (racingCount) => {
  const cars = document.querySelectorAll('#car-player');

  for (let i = 0; i < racingCount; i++) {
    updateRacingCount(cars);
  }
};
