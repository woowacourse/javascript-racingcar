import { CLASS, ID } from './constants.js';
import { getElement, getElements } from './utils/dom.js';

const loadingView = '<div class="loader"></div>';

const carsNameView = cars => {
  return cars
    .map(
      ({ name }) =>
        `<div class=${CLASS.CAR_STATUS} data-name=${name}><div class=${CLASS.CAR_NAME}>${name}</div>${loadingView}</div>`,
    )
    .join('');
};

const carMovementView = () => {
  const moveDiv = document.createElement('div');
  moveDiv.textContent = '⬇️';
  moveDiv.className = 'move';

  return moveDiv;
};

const removeAllChildNodes = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const clearLoadingView = cars => {
  const parents = Array.from(getElements(CLASS.CAR_STATUS));
  parents.forEach(parent => {
    if (parent.lastChild.className === 'loader') {
      parent.removeChild(parent.lastChild);
    }
  });
};

const resultView = winners => {
  getElement(ID.RACING_WINNERS).insertAdjacentHTML(
    'afterbegin',
    winnersView(winners),
  );
  getElement(ID.RESTART_BUTTON).style.visibility = 'visible';
};

const winnerAlert = winners => alert(`🎉우승을 축하합니다 ${winners}🎉`);

const winnersView = winners => `<h3>🏆최종 우승자: ${winners}🏆</h3>`;

const initRacingStatus = cars => {
  getElement(ID.RACING_STATUS).insertAdjacentHTML(
    'beforeend',
    carsNameView(cars),
  );
};

export {
  carMovementView,
  clearLoadingView,
  removeAllChildNodes,
  resultView,
  initRacingStatus,
  winnerAlert,
  loadingView,
};
