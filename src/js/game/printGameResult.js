import { getWinners } from '../utils/getWinners.js';
import { toggleVisibility as setInvisible } from '../utils/toggleVisibility.js';

export const printGameResult = () => {
  const $gameResultText = document.querySelector('#game-result-text');
  const $gameRestartButton = document.querySelector('#game-restart-button');

  $gameResultText.innerHTML = `🏆 최종 우승자: ${getWinners()} 🏆`;
  $gameRestartButton.addEventListener('click', restartGame);
};

const restartGame = () => {
  clearGameResult();
  clearInputs();
  setInitialView();
};

const clearGameResult = () => {
  const $gameProcessScreen = document.querySelector('#game-process-screen');

  $gameProcessScreen.innerHTML = '';
};

const clearInputs = () => {
  const $carNameInput = document.querySelector('#car-name-input');
  const $racingCountInput = document.querySelector('#racing-count-input');

  $carNameInput.value = '';
  $racingCountInput.value = '';
};

const setInitialView = () => {
  setInvisible('$racingCountSection');
  setInvisible('$gameProcessSection');
  setInvisible('$gameResultSection');
};
