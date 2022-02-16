import { $ } from '../util/dom.js';

const addArrow = (currentTurnCount, cars) => {
  const carResults = document.querySelectorAll('.car-result');

  carResults.forEach((ele, idx) => {
    if (cars[idx].score >= currentTurnCount) {
      const arrow = document.createElement('p');
      arrow.innerHTML = `⬇️`;
      ele.appendChild(arrow);
    }
  });
};

const playTurn = (cars, currentTurnCount) => {
  return new Promise(resolve => {
    setTimeout(() => {
      addArrow(currentTurnCount, cars);
      resolve({
        nextTurnCount: currentTurnCount + 1,
      });
    }, 1000);
  });
};

const playTurnResult = async ({ lastTurnCount, cars, currentTurnCount }) => {
  await playTurn(cars, currentTurnCount)
    .then(res => {
      const { nextTurnCount } = res;

      if (lastTurnCount >= nextTurnCount) {
        playTurnResult({
          lastTurnCount,
          cars,
          currentTurnCount: nextTurnCount,
        });
      }
    })
    .catch(err => console.log('err', err));
};

export const renderResult = ({ cars, lastTurnCount }) => {
  const currentTurnCount = 1;
  const turnResult = document.querySelector('#turn-result');

  cars.forEach(car => {
    const { name } = car;
    const carResult = document.createElement('div');
    carResult.setAttribute('class', 'car-result');
    const carNameTitle = document.createElement('div');
    carNameTitle.innerHTML = `${name}`;
    carResult.appendChild(carNameTitle);
    turnResult.appendChild(carResult);
  });

  playTurnResult({ lastTurnCount, cars, currentTurnCount });
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
