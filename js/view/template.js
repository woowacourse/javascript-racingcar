export const template = {
  carNamesTemplate(carNames) {
    return carNames.map((carName) => `<span id="result-car-name">${carName}</span>`).join('');
  },

  initialLoaderTemplate(carPosition) {
    return carPosition
      .map((position) => `<div id="car-progress-result"><div class="loader"></div></div>`)
      .join('');
  },

  carProgressTemplate(carPosition) {
    return carPosition
      .map((position) => `<div id="car-progress-result">${'⬇️️'.repeat(position)}</div>`)
      .join('');
  },

  loaderTemplate() {
    return '<div class="loader"></div>';
  },

  winnerTemplate(winners) {
    return `🏆 최종 우승자: ${winners} 🏆`;
  },
};
