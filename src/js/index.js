import $ from './utils/dom.js';
import { SELECTORS } from './constants/constants.js';
import handleCarNamesSubmit from './input/handleCarNames.js';
import handleRacingCountSubmit from './input/handleRacingCount.js';

function init() {
  $(SELECTORS.CAR_NAMES_BUTTON).addEventListener('click', handleCarNamesSubmit);
  $(SELECTORS.RACING_COUNT_BUTTON).addEventListener('click', handleRacingCountSubmit);
}

export default function racingCarGame() {
  init();
}

window.addEventListener('DOMContentLoaded', () => {
  racingCarGame();
});
