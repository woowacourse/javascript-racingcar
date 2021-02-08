import { toggleVisibility } from '../utils/toggleVisibility.js';

const resetGame = () => {
  const $carNameInput = document.querySelector('#car-name-input');
  const $racingCountInput = document.querySelector('#racing-count-input');
  const $gameProcessScreen = document.querySelector('#game-process-screen');
  const $carNameSubmit = document.querySelector('#car-name-submit');
  const $racingCountSubmit = document.querySelector('#racing-count-submit');

  $carNameInput.value = '';
  $racingCountInput.value = '';
  $gameProcessScreen.innerHTML = '';
  $carNameSubmit.removeAttribute('disabled');
  $racingCountSubmit.removeAttribute('disabled');
};

export const restartGame = () => {
  toggleVisibility('$racingCountSection');
  toggleVisibility('$gameProcessSection');
  toggleVisibility('$gameResultSection');

  resetGame();
};
