import { GAME_RESULT } from '../constants/gameOverNotice.js';
import { $ } from '../utils/querySelector.js';
import { setVisibility } from './utils/setVisibility.js';

export const showGameResult = (winners) => {
  const { PREFIX, SUFFIX } = GAME_RESULT;

  $('#game-result-text').innerHTML = `${PREFIX}${winners}${SUFFIX}`;
  setVisibility($('#game-result-section'), true);
};
