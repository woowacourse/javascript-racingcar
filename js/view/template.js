export const template = {
  carNamesTemplate(carNames) {
    return carNames.map((carName) => `<span id="result-car-name">${carName}</span>`).join('');
  },

  winnerTemplate(winners) {
    return `🏆 최종 우승자: ${winners} 🏆`;
  },

  carProgressTemplate(carPosition) {
    return carPosition
      .map((position) => `<div id="car-progress-result">${'⬇️️'.repeat(position)}</div>`)
      .join('');
  },
};
