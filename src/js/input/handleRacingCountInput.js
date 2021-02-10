import { $ } from '../utils/querySelector.js';
import { validateRacingCount } from '../utils/validateRacingCount.js';
import { setVisibility } from '../utils/setVisibility.js';
import { startGame } from '../game/startGame.js';

export const handleRacingCountInput = () => {
  const $racingCountInput = document.querySelector('#racing-count-input');
  const racingCount = $racingCountInput.value;
  const errorMessage = validateRacingCount(racingCount);

  if (errorMessage) {
    alert(errorMessage);
    $racingCountInput.value = '';
    return;
  }
  setVisibility($('#game-process-section'), true);
  startGame(racingCount);
};
