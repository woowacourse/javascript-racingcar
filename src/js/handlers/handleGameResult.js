import { RACING_RULE } from '../constants/racingRule.js';
import { insertForwardIcon } from '../views/insertForwardIcon.js';
import { clearResidueForwardIcon } from '../views/clearResidueForwardIcon.js';
import { hideLoader, showLoader } from '../views/setLoaderVisibility.js';
import { wait } from '../views/utils/wait.js';
import { showGameResult } from '../views/showGameResult.js';
import { alertGameOverAfterDelay } from '../views/alertGameOver.js';
import { getWinners } from '../models/getWinners.js';

export const handleGameResult = async (cars, racingCount) => {
  let winners;

  clearResidueForwardIcon();
  showLoader();
  await playRacingGame(cars, racingCount);
  hideLoader();
  winners = getWinners(cars);
  showGameResult(winners);
  alertGameOverAfterDelay(winners);
};

const playRacingGame = async (cars, racingCount) => {
  const { TURN_DURATION } = RACING_RULE;

  for (let i = 0; i < racingCount; i++) {
    await wait(TURN_DURATION);
    playOneTurn(cars);
  }
};

const playOneTurn = (cars) => {
  cars.forEach((car, index) => {
    if (car.isMovingForward()) {
      car.addForwardCount();
      insertForwardIcon(index);
    }
  });
};
