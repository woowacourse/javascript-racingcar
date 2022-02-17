import { TIME } from '../util/constants.js';
import getWinners from '../model/getWinners.js';
import sleep from '../util/sleep.js';

export function showWinners(winners) {
  const resultContainer = document.querySelector('.game-result-container');
  resultContainer.insertAdjacentHTML('beforeend', `<div class="winners-name">🏆 최종 우승자: ${[...winners]} 🏆</div>`);
}

export function resetView() {
  const nameInput = document.body.querySelector('.name-input');
  const countForm = document.body.querySelector('.count-form');
  const countInput = countForm.children[1].firstChild;
  const result = document.body.querySelector('.result');
  const resultContainer = result.children[0];
  const restart = result.children[1];

  nameInput.value = '';
  countInput.value = '';
  countForm.style.display = 'none';
  resultContainer.innerHTML = '';
  restart.style.display = 'none';
}

export function showRestart() {
  document.querySelector('.restart-container').style.display = 'flex';
}

function getCarsNameTemplate(cars) {
  return cars
    .map(car => {
      return `<div class="result-car-wrapper">
                <div class="result-car-name">${car.name}</div>
                <div class="result-progress-wrapper"></div>
              </div>`;
    })
    .join('');
}

function showOneGo(wrapper) {
  wrapper.insertAdjacentHTML('afterbegin', '<div class="result-arrow">⬇️️</div>');
}

function makeSpinner(wrappers) {
  wrappers.forEach(wrapper => {
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    wrapper.insertAdjacentElement('beforeend', spinner);
  });
}

function removeSpinner(wrappers) {
  wrappers.forEach(wrapper => {
    wrapper.lastChild.remove();
  });
}

function showOneRowArrow(cars, wrappers, currentCount) {
  cars.forEach((car, index) => {
    if (car.position > currentCount) {
      showOneGo(wrappers[index]);
    }
  });
}

async function showArrow(cars, count, wrappers) {
  for (let i = 0; i < +count; i += 1) {
    await sleep(TIME.RESULT_DELAY).then(() => showOneRowArrow(cars, wrappers, i));
  }
  return Promise.resolve();
}

async function showRaceProgress(cars, count) {
  const wrappers = document.querySelectorAll('.result-progress-wrapper');

  makeSpinner(wrappers);
  await showArrow(cars, count, wrappers);
  removeSpinner(wrappers);
  return Promise.resolve();
}

export default async function showResult(cars, count) {
  const resultContainer = document.querySelector('.game-result-container');
  const div = document.createElement('div');

  div.className = 'race-result-container';
  div.innerHTML = getCarsNameTemplate(cars);
  resultContainer.append(div);
  await showRaceProgress(cars, count);
  showWinners(getWinners(cars));
  showRestart();
}
