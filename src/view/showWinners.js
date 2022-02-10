export default function showWinners(winners) {
  const resultContainer = document.querySelector('main');
  resultContainer.insertAdjacentHTML('beforeend', `<div class="winners-name">🏆 최종 우승자: ${[...winners]} 🏆</div>`);
}
