import { $ } from '../util/dom.js';

export const renderResult = cars => {
  $('#turn-result').innerHTML += `${cars
    .map(car => {
      return `<div>name:${car.name} score:${'⬇️'.repeat(car.score)}</div>`;
    })
    .join('')}`;
};

export const renderWinners = cars => {
  console.log(cars);
  if (cars.length === 0) {
    return;
  }
  const maxScore = Math.max(...cars.map(car => car.score));
  const winners = cars
    .filter(car => car.score === maxScore)
    .map(car => car.name);

  $('#winners-result').innerHTML = `
    <p>최종 우승자 ${winners.join(',')}</p>
    <button id="reset-btn">다시 시작하기</button>
  `;
};

export const removeBeforeResult = e => {
  if (e.target.id === 'reset-btn') {
    $('#game-result').innerHTML = '';
  }
};
