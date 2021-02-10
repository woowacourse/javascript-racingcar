import { $ } from '../utils/querySelector.js'
import { getWinners } from '../utils/getWinners.js';
import { setVisibility } from '../utils/setVisibility.js';

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
  setVisibility($('#racing-count-section'), false);
  setVisibility($('#game-process-section'), false);
  setVisibility($('#game-result-section'), false);
};
