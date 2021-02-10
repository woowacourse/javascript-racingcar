import { getWinners } from './getWinners.js';
import { restartGame } from './restartGame.js';

const alertGameResult = (winners) => {
  alert(`🎉 축하드립니다! 우승자는 ${winners}입니다! 🎉`);
};

export const printGameResult = () => {
  const $gameResultText = document.querySelector('#game-result-text');
  const $gameRestartButton = document.querySelector('#game-restart-button');
  const winners = getWinners();

  $gameResultText.innerHTML = `🏆 최종 우승자: ${winners} 🏆`;
  $gameRestartButton.addEventListener('click', restartGame);

  setTimeout(() => alertGameResult(winners), 2000);
};
