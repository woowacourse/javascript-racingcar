import { GAME, ERR_MESSAGE } from '../utils/constant.js';
import { startGame } from '../game/startGame.js';
import { setDisabled, setVisibility } from '../utils/setAttribute.js';

const isValidRacingCount = (racingCount) => {
  if (racingCount < GAME.MIN_COUNT) {
    return false;
  }
  return true;
};

export const handleRacingCountInput = () => {
  const $racingCountInput = document.querySelector('#racing-count-input');
  const $racingCountSubmit = document.querySelector('#racing-count-submit');
  const $gameProcessSection = document.querySelector('#game-process-section');

  const racingCount = $racingCountInput.value;
  if (!isValidRacingCount(racingCount)) {
    alert(ERR_MESSAGE.COUNT_TOO_SMALL);
    $racingCountInput.value = '';
    return;
  }

  setVisibility($gameProcessSection, true);
  setDisabled($racingCountSubmit, true);
  startGame(racingCount);
};
