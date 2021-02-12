import { GAME_RESULT } from '../constants/gameOverNotice.js';
import { $ } from './querySelector.js';
import { setVisibility } from './setVisibility.js';

export const showGameResult = (winners) => {
  const { PREFIX, SUFFIX } = GAME_RESULT;

  $('#game-result-text').innerHTML = `${PREFIX}${winners}${SUFFIX}`;
  setVisibility($('#game-result-section'), true);
};
