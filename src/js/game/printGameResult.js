import { getWinners } from '../utils/getWinners.js';

export const printGameResult = () => {
  const $gameResultText = document.querySelector('#game-result-text');

  $gameResultText.innerHTML = `🏆 최종 우승자: ${getWinners()} 🏆`;
};
