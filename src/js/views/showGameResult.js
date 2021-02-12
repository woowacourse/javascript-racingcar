import { $ } from './utils/querySelector.js';
import { GAME_RESULT } from '../constants/gameOverNotice.js';
import { showElement } from './utils/showElement.js';

export const showGameResult = (winners) => {
  const { PREFIX, SUFFIX } = GAME_RESULT;

  $('#game-result-text').innerHTML = `${PREFIX}${winners}${SUFFIX}`;
  showElement($('#game-result-section'));
};
