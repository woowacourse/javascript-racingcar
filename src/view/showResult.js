import { TIME, RESULT } from '../util/constants.js';
import getWinners from '../model/getWinners.js';
import delay from '../util/delay.js';
import { isNumber } from '../util/typeCheck.js';

export function showWinners(winners) {
  const resultContainer = document.querySelector('.game-result-container');
  resultContainer.insertAdjacentHTML('beforeend', `<div class="winners-name">🏆 최종 우승자: ${[...winners]} 🏆</div>`);
}

export function resetView() {
  const nameInput = document.body.querySelector('.name-input');
  const countForm = document.body.querySelector('.count-form');
  const countInput = countForm.querySelector('.count-input');
  const result = document.body.querySelector('.result');
  const resultContainer = result.querySelector('.game-result-container');
  const restart = result.querySelector('.restart-container');

  nameInput.value = '';
  countInput.value = '';
  countForm.classList.add('d-none');
  restart.classList.add('d-none');
  resultContainer.innerHTML = '';
}

export function showRestart() {
  document.querySelector('.restart-container').classList.remove('d-none');
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
    wrapper.querySelector('.spinner').remove();
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
  if (!isNumber(count)) return;
  for (let i = 0; i < count; i += 1) {
    await delay(TIME.SPINNER_DELAY);
    showOneRowArrow(cars, wrappers, i);
  }
}

async function showRaceProgress(cars, count) {
  const wrappers = document.querySelectorAll('.result-progress-wrapper');

  makeSpinner(wrappers);
  await showArrow(cars, +count, wrappers);
  removeSpinner(wrappers);
}

function delayFinalResult(cars) {
  setTimeout(() => {
    alert(RESULT);
    showWinners(getWinners(cars));
    showRestart();
  }, TIME.RESULT_DELAY);
}

export default async function showResult(cars, count) {
  const resultContainer = document.querySelector('.game-result-container');
  const raceContainer = document.createElement('div');

  raceContainer.className = 'race-result-container';
  raceContainer.innerHTML = getCarsNameTemplate(cars);
  resultContainer.append(raceContainer);
  await showRaceProgress(cars, count);
  delayFinalResult(cars);
}
