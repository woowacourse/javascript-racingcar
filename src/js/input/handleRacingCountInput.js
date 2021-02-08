import { VALIDATOR, ERR_MESSAGE } from '../utils/constant.js';
import { startGame } from '../game/startGame.js';
import { toggleVisibility as setVisible } from '../utils/toggleVisibility.js';

export const handleRacingCountInput = () => {
  const $racingCountInput = document.querySelector('#racing-count-input');
  const racingCount = $racingCountInput.value;

  if (!isValidRacingCount(racingCount)) {
    return ($racingCountInput.value = '');
  }
  setVisible('gameProcessSection');
  startGame(racingCount);
};

const isValidRacingCount = (racingCount) => {
  if (racingCount < VALIDATOR.MIN_COUNT) {
    alert(ERR_MESSAGE.COUNT_TOO_SMALL);
    return false;
  }
  return true;
};
