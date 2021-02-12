import { RACING_RULE } from '../constants/racingRule.js';
import { wait } from '../utils/wait.js';
import { alertGameOverAfterDelay } from '../views/alertGameOver.js';
import { showGameResult } from '../views/showGameResult.js';
import { hideLoader, showLoader } from '../views/setLoaderVisibility.js';
import { clearResidueArrow, insertArrow } from '../views/addRemoveArrow.js';
import { getWinners } from '../models/getWinners.js';

export const handleGameResult = async (cars, racingCount) => {
  const { TURN_DURATION } = RACING_RULE;
  let winners;

  clearResidueArrow();
  showLoader();
  for (let i = 0; i < racingCount; i++) {
    await wait(TURN_DURATION);
    playOneGame(cars);
  }
  hideLoader();
  winners = getWinners(cars);
  showGameResult(winners);
  alertGameOverAfterDelay(winners);
};

const playOneGame = (cars) => {
  cars.forEach((car, index) => {
    if (car.isMovingForward()) {
      car.forwardCount += 1;
      insertArrow(index);
    }
  });
};
