import { showElement } from '../utils/handleElement.js';
import { $ } from '../utils/selector.js';

export const showWinners = winners => {
  showElement($('.winner-container'));
  $('.winner-container').insertAdjacentHTML(
    'beforeend',
    `<span class="winners-name">🏆 최종 우승자: ${[...winners]} 🏆</span>`,
  );
};

export const showRestart = () => {
  showElement($('.restart'));
};
