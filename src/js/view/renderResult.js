import { $ } from '../util/dom.js';

const renderCarScore = (name, score) => {
  return `<div>${name}</div>${'<p>⬇️</p>'.repeat(score)}`;
};

export const renderResult = cars => {
  $('#turn-result').innerHTML = `${cars
    .map(car => {
      return `<div id="car-result">${renderCarScore(
        car.name,
        car.score,
      )}</div>`;
    })
    .join('')}`;
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
