import { GAME_OVER_NOTICE } from '../constants/gameOverNotice.js';

export const alertGameOverAfterDelay = async (winners) => {
  const { MSG_SUFFIX } = GAME_OVER_NOTICE;

  alert(`${winners}${MSG_SUFFIX}`);
};
