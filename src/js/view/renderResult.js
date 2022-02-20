import { $ } from '../util/dom.js';
import loadingAnimation from './loading.js';

const addArrow = (currentTurnCount, cars) => {
  const carScoreArrows = document.querySelectorAll('.car-score-arrows');

  carScoreArrows.forEach((ele, idx) => {
    if (cars[idx].score >= currentTurnCount) {
      const arrow = document.createElement('p');
      arrow.textContent = `⬇️`;
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
  const { nextTurnCount } = await playTurn(cars, currentTurnCount);
  const shouldPlayNext = lastTurnCount >= nextTurnCount;

  if (shouldPlayNext) {
    await playTurnResult({
      lastTurnCount,
      cars,
      currentTurnCount: nextTurnCount,
    });
  }
};

const renderWinners = winners => {
  $('#winners-result').insertAdjacentHTML(
    'afterbegin',
    `
    <p>🏆 최종 우승자 <span id="winners">${winners.join(',')}</span> 🏆</p>
    <button id="reset-btn">다시 시작하기</button>
  `,
  );
};

const removeLoadingAnimation = () => {
  const carResults = document.querySelectorAll('.car-result');
  carResults.forEach(ele => {
    ele.querySelector('.loading-indicator').remove();
  });
};

const domInit = cars => {
  const turnResult = document.querySelector('#turn-result');

  cars.forEach(car => {
    const { name } = car;

    turnResult.insertAdjacentHTML(
      'beforeend',
      `<div class='car-result'>
        <p class='car-Name-title'>${name}</p>
        <div class='car-score-arrows'></div>
        ${loadingAnimation()}
      </div>`,
    );
  });
};

const resetDom = () => {
  $('#turn-result').innerHTML = '';
  $('#winners-result').innerHTML = '';
};

export const renderResult = async ({ cars, lastTurnCount, winners }) => {
  const currentTurnCount = 1;

  resetDom();
  domInit(cars);

  await playTurnResult({
    lastTurnCount,
    cars,
    currentTurnCount,
  });

  renderWinners(winners);
  removeLoadingAnimation();

  setTimeout(() => {
    window.alert('축하합니다!');
  }, 2000);
};

export const removeBeforeResult = e => {
  if (e.target.id === 'reset-btn') {
    resetDom();
  }
};
