import { getWinners } from '../utils/getWinners.js';
import { toggleVisibility } from '../utils/toggleVisibility.js';

const restartGame = () => {
  toggleVisibility('racingCountSection');
  toggleVisibility('gameProcessSection');
  toggleVisibility('gameResultSection');
};

export const printGameResult = () => {
  const $gameResultText = document.querySelector('#game-result-text');
  const $gameRestartButton = document.querySelector('#game-restart-button');

  $gameResultText.innerHTML = `🏆 최종 우승자: ${getWinners()} 🏆`;
  $gameRestartButton.addEventListener('click', restartGame);
};
