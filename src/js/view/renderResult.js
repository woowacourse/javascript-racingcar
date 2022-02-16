import { $ } from '../util/dom.js';

export const renderResult = (cars, index, tryCount) => {
  let count = 0;
  if (index !== tryCount - 1) {
    count = 1;
  }
  const template = cars
    .map(car => {
      return `
      <div id="car-result">
        <div>${car.name}</div>${'<p>⬇️</p>'.repeat(car.score)}
        ${'<p id="loading-animation"></p>'.repeat(count)}
      </div>`;
    })
    .join('');

  $('#turn-result').innerHTML = template;
};

export const renderWinners = winners => {
  $('#winners-result').innerHTML = `
    <p>🏆 최종 우승자 <span id="winners">${winners.join(',')}</span> 🏆</p>
    <button id="reset-btn">다시 시작하기</button>
  `;
};

export const removeBeforeResult = e => {
  if (e.target.id === 'reset-btn') {
    $('#turn-result').innerHTML = '';
    $('#winners-result').innerHTML = '';
  }
};
