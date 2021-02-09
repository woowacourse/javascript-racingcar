import { toggleDisabled } from '../utils/toggleDisabled.js';
import { toggleVisibility } from '../utils/toggleVisibility.js';

const resetGame = () => {
  const $carNameInput = document.querySelector('#car-name-input');
  const $racingCountInput = document.querySelector('#racing-count-input');
  const $gameProcessScreen = document.querySelector('#game-process-screen');

  $carNameInput.value = '';
  $racingCountInput.value = '';
  $gameProcessScreen.innerHTML = '';
};

export const restartGame = () => {
  toggleVisibility('$racingCountSection');
  toggleVisibility('$gameProcessSection');
  toggleVisibility('$gameResultSection');
  toggleDisabled('$carNameSubmit');
  toggleDisabled('$racingCountSubmit');

  resetGame();
};
