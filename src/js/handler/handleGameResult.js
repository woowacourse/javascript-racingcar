import { $, $$ } from '../util-view/querySelector.js';
import { setVisibility } from '../util-view/setVisibility.js';
import { wait } from '../util-view/wait.js';
import { getWinners } from '../util-model/getWinners.js';
import { alertGameOverAfterDelay } from '../util-view/alertGameOver.js';
import { showGameResult } from '../util-view/showGameResult.js';
import { RACING_RULE } from '../constants/racingRule.js';

export const handleGameResult = async (cars, racingCount) => {
  const { TURN_DURATION } = RACING_RULE;
  let winners;

  clearResidueArrow();

  $$('.spinner-container').forEach((spinner) => setVisibility(spinner, true));
  for (let i = 0; i < racingCount; i++) {
    await wait(TURN_DURATION);
    playOneGame(cars);
  }
  $$('.spinner-container').forEach((spinner) => setVisibility(spinner, false));
  winners = getWinners(cars);
  showGameResult(winners);
  alertGameOverAfterDelay(winners);
};

const playOneGame = (cars) => {
  cars.forEach((car, index) => {
    if (car.isMovingForward()) {
      car.forwardCount += 1;
      insertArrowHTML(index);
    }
  });
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
