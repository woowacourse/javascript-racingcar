import { RACING_RULE } from '../constants/racingRule.js';
import { wait } from '../utils/wait.js';
import { alertGameOverAfterDelay } from '../views/alertGameOver.js';
import { showGameResult } from '../views/showGameResult.js';
import { hideLoader, showLoader } from '../views/setLoaderVisibility.js';
import {
  clearResidueForwardIcon,
  insertForwardIcon,
} from '../views/insertClearForwardIcon.js';
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
