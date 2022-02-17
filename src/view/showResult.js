import { $ } from '../utils/selector.js';

export const showWinners = winners => {
  $('.winner-container').classList.remove('hidden');
  $('.winner-container').insertAdjacentHTML(
    'beforeend',
    `<span class="winners-name">🏆 최종 우승자: ${[...winners]} 🏆</span>`,
  );
};

export const showRestart = () => {
  $('.restart').classList.remove('hidden');
};
