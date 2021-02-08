import { getWinners } from '../utils/getWinners.js';

const restartGame = () => {
  const $racingCountSection = document.querySelector('#racing-count-section');
  const $gameProcessSection = document.querySelector('#game-process-section');
  const $gameResultSection = document.querySelector('#game-result-section');

  $racingCountSection.setAttribute('hidden', true);
  $gameProcessSection.setAttribute('hidden', true);
  $gameResultSection.setAttribute('hidden', true);
};

export const printGameResult = () => {
  const $gameResultText = document.querySelector('#game-result-text');
  const $gameRestartButton = document.querySelector('#game-restart-button');

  $gameResultText.innerHTML = `🏆 최종 우승자: ${getWinners()} 🏆`;
  $gameRestartButton.addEventListener('click', restartGame);
};
