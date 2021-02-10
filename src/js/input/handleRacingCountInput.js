import { GAME, ERR_MESSAGE } from '../utils/constant.js';
import { startGame } from '../game/startGame.js';
import { toggleVisibility } from '../utils/toggleVisibility.js';
import { toggleDisabled } from '../utils/toggleDisabled.js';

const isValidRacingCount = (racingCount) => {
  if (racingCount < GAME.MIN_COUNT) {
    return false;
  }
  return true;
};

export const handleRacingCountInput = () => {
  const $racingCountInput = document.querySelector('#racing-count-input');

  const racingCount = $racingCountInput.value;
  if (!isValidRacingCount(racingCount)) {
    alert(ERR_MESSAGE.COUNT_TOO_SMALL);
    $racingCountInput.value = '';
    return;
  }

  toggleVisibility('$gameProcessSection');
  toggleDisabled('$racingCountSubmit');
  startGame(racingCount);
};
