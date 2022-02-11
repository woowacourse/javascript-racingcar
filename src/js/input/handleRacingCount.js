import { GAME, ERR_MESSAGE, SELECTORS } from '../constants/constants.js';
import $ from '../utils/dom.js';
// import startRacingGame from '../game/startRacingGame.js';

function isValidRacingCount(racingCount) {
  if (racingCount < GAME.MIN_INPUT_COUNT) {
    return alert(ERR_MESSAGE.COUNT_TOO_SMALL);
  }
  return true;
}

export default function handleRacingCountSubmit() {
  const racingCount = $(SELECTORS.RACING_COUNT_INPUT).value;

  if (!isValidRacingCount(racingCount)) {
    return;
  }

  // startRacingGame(racingCount);
}