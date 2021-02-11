import { setDisabled, setVisibility } from '../utils/setAttribute.js';

const resetGame = () => {
  const $carNameInput = document.querySelector('#car-name-input');
  const $racingCountInput = document.querySelector('#racing-count-input');
  const $gameProcessScreen = document.querySelector('#game-process-screen');

  $carNameInput.value = '';
  $racingCountInput.value = '';
  $gameProcessScreen.innerHTML = '';
};

export const restartGame = () => {
  const $carNameSubmit = document.querySelector('#car-name-submit');
  const $racingCountSubmit = document.querySelector('#racing-count-submit');
  const $racingCountSection = document.querySelector('#racing-count-section');
  const $gameProcessSection = document.querySelector('#game-process-section');
  const $gameResultSection = document.querySelector('#game-result-section');

  setVisibility($racingCountSection, false);
  setVisibility($gameProcessSection, false);
  setVisibility($gameResultSection, false);
  setDisabled($carNameSubmit, false);
  setDisabled($racingCountSubmit, false);

  resetGame();
};
