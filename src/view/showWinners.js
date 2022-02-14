import $ from '../utils/selector.js';

const showWinners = winners => {
  $('.game-result-container').insertAdjacentHTML(
    'beforeend',
    `<div class="winners-name">🏆 최종 우승자: ${[...winners]} 🏆</div>`,
  );
};

export default showWinners;
