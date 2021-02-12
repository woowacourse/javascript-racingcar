import { GAME_OVER_NOTICE } from '../constants/gameOverNotice.js';
import { wait } from './wait.js';

export const alertGameOverAfterDelay = async (winners) => {
  const { DELAY, MSG_SUFFIX } = GAME_OVER_NOTICE;

  await wait(DELAY);
  alert(`${winners}${MSG_SUFFIX}`);
};
