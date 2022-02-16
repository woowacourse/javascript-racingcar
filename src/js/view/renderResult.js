import { $ } from '../util/dom.js';
import loadingAnimation from './loading.js';

const addArrow = (currentTurnCount, cars) => {
  const carScoreArrows = document.querySelectorAll('.car-score-arrows');

  carScoreArrows.forEach((ele, idx) => {
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
        return playTurnResult({
          lastTurnCount,
          cars,
          currentTurnCount: nextTurnCount,
        });
      }

      return res;
    })
    .catch(err => console.log('err', err));
};

const renderWinners = winners => {
  $('#winners-result').innerHTML = `
    <p>🏆 최종 우승자 <span id="winners">${winners.join(',')}</span> 🏆</p>
    <button id="reset-btn">다시 시작하기</button>
  `;
};

const removeLoadingAnimation = () => {
  const carResults = document.querySelectorAll('.car-result');
  carResults.forEach(ele => {
    ele.querySelector('.loading-ring').remove();
  });
};

export const renderResult = async ({ cars, lastTurnCount, winners }) => {
  const currentTurnCount = 1;
  const turnResult = document.querySelector('#turn-result');

  cars.forEach(car => {
    const { name } = car;
    const carResult = document.createElement('div');
    carResult.setAttribute('class', 'car-result');
    const carNameTitle = document.createElement('div');
    carNameTitle.setAttribute('class', 'car-Name-title');
    carNameTitle.innerHTML = `${name}`;

    const carScoreArrowsBox = document.createElement('div');
    carScoreArrowsBox.setAttribute('class', 'car-score-arrows');

    carResult.append(carNameTitle, carScoreArrowsBox, loadingAnimation());
    turnResult.appendChild(carResult);
  });

  await playTurnResult({
    lastTurnCount,
    cars,
    currentTurnCount,
  }).then(() => {
    renderWinners(winners);
    removeLoadingAnimation();

    setTimeout(() => {
      window.alert('축하합니다!');
    }, 2000);
  });
};

export const removeBeforeResult = e => {
  if (e.target.id === 'reset-btn') {
    $('#turn-result').innerHTML = '';
    $('#winners-result').innerHTML = '';
  }
};
