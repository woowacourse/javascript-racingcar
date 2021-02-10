import { $, $$ } from '../util-view/querySelector.js';
import { setVisibility } from '../util-view/setVisibility.js';
import { setToInitialView } from '../util-view/setToInitialView.js';
import { isEffectiveScore } from '../util-model/isEffectiveScore.js';
import { getWinners } from '../util-model/getWinners.js';

export const handleGameResult = (cars, racingCount) => {
  clearResidueArrow();
  for (let i = 0; i < racingCount; i++) {
    cars.forEach((car, index) => {
      if (isEffectiveScore()) {
        car.forwardCount += 1;
        insertArrowHTML(index);
      }
    });
  }
  insertGameResultHTML(getWinners(cars));
  setVisibility($('#game-result-section'), true);
};

const clearResidueArrow = () => {
  $$('.forward-icon').forEach(($arrow) => $arrow.remove());
};

const insertArrowHTML = (index) => {
  $$('.car-player')[index].insertAdjacentHTML('afterEnd', arrowTemplate());
};

const arrowTemplate = () => {
  return `<div class="forward-icon mt-2">⬇️️</div>`;
};

const insertGameResultHTML = (winners) => {
  $('#game-result-text').innerHTML = `🏆 최종 우승자: ${winners} 🏆`;
  $('#game-restart-button').addEventListener('click', setToInitialView);
};
