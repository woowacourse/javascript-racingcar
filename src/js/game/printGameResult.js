import { getWinners } from '../utils/getWinners.js';
import { toggleVisibility as setInvisible } from '../utils/toggleVisibility.js';

export const printGameResult = () => {
  const $gameResultText = document.querySelector('#game-result-text');
  const $gameRestartButton = document.querySelector('#game-restart-button');

  $gameResultText.innerHTML = `🏆 최종 우승자: ${getWinners()} 🏆`;
  $gameRestartButton.addEventListener('click', restartGame);
};

const restartGame = () => {
  const $carNameInput = document.querySelector('#car-name-input');
  const $racingCountInput = document.querySelector('#racing-count-input');
  const $gameProcessScreen = document.querySelector('#game-process-screen');

  setInvisible('racingCountSection');
  setInvisible('gameProcessSection');
  setInvisible('gameResultSection');

  $carNameInput.value = '';
  $racingCountInput.value = '';
  $gameProcessScreen.innerHTML = '';
};
