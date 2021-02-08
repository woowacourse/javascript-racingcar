import { getWinners } from './getWinners.js';
import { restartGame } from './restartGame.js';

export const printGameResult = () => {
  const $gameResultText = document.querySelector('#game-result-text');
  const $gameRestartButton = document.querySelector('#game-restart-button');

  $gameResultText.innerHTML = `🏆 최종 우승자: ${getWinners()} 🏆`;
  $gameRestartButton.addEventListener('click', restartGame);
};
