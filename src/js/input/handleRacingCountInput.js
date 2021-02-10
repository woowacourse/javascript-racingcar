import { $ } from '../utils/querySelector.js';
import { CAR, ERR_MESSAGE } from '../utils/constant.js';
import { startGame } from '../game/startGame.js';
import { setVisibility } from '../utils/setVisibility.js';

export const handleRacingCountInput = () => {
  const $racingCountInput = document.querySelector('#racing-count-input');
  const racingCount = $racingCountInput.value;

  if (!isValidRacingCount(racingCount)) {
    return ($racingCountInput.value = '');
  }
  setVisibility($('#game-process-section'), true);
  startGame(racingCount);
};

const isValidRacingCount = (racingCount) => {
  if (racingCount < CAR.MIN_RACING_COUNT) {
    alert(ERR_MESSAGE.COUNT_TOO_SMALL);
    return false;
  }
  return true;
};
