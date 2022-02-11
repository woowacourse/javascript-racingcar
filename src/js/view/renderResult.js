import { $ } from '../util/dom.js';

export const renderResult = cars => {
  $('#turn-result').innerHTML = `${cars
    .map(car => {
      return `<div id="car-result">
        <div>${car.name}</div>
        ${'<p>⬇️</p>'.repeat(car.score)}
      </div>`;
    })
    .join('')}`;
};

export const renderWinners = cars => {
  console.log(cars);
  if (cars.length === 0) {
    window.alert('자동차 이름을 입력해 주세요.');
    return;
  }
  const maxScore = Math.max(...cars.map(car => car.score));
  const winners = cars
    .filter(car => car.score === maxScore)
    .map(car => car.name);

  $('#winners-result').innerHTML = `
    <p>🏆 최종 우승자 <span id="winners">${winners.join(',')}</span> 🏆 </p>
    <button id="reset-btn">다시 시작하기</button>
  `;
};

export const removeBeforeResult = e => {
  if (e.target.id === 'reset-btn') {
    $('#turn-result').innerHTML = '';
    $('#winners-result').innerHTML = '';
  }
};
