import { clearInput } from '../utils/utils.js';
import { state } from '../models/state.js';

export function renderCarNames() {
  const racingCars = document.getElementById('racing-cars');

  for (let i = 0; i < state.cars.length; i++) {
    const racingProgress = document.createElement('div');
    racingProgress.className = 'racing-progress flex-column';
    racingCars.appendChild(racingProgress);

    const carNameBox = document.createElement('div');
    carNameBox.className = 'car-name-box';
    carNameBox.innerHTML = state.cars[i].name;
    racingProgress.appendChild(carNameBox);
  }
}

export function renderProgressArrowOfState() {
  for (let nowRacingNumber = 0; nowRacingNumber < state.racingNumber; nowRacingNumber++) {
    setTimeout(() => renderProgressArrowsForOneRound(nowRacingNumber), (nowRacingNumber + 1) * 1000);
  }
}

export function renderProgressArrowsForOneRound(nowRacingNumber) {
  state.cars.forEach((element, index) => {
    if (element.location > nowRacingNumber) {
      renderProgressArrow(index);
    }
  });
}

function renderProgressArrow(index) {
  const racingProgress = document.getElementsByClassName('racing-progress');
  const racingArrow = document.createElement('div');
  const spinner = document.getElementsByClassName('spinner');
  racingArrow.className = 'racing-progress-arrow';
  racingArrow.insertAdjacentHTML('afterbegin', '⬇️️');
  racingProgress[index].insertBefore(racingArrow, spinner[index]);
}

export function renderSpinnerForOneRound() {
  state.cars.forEach((element, index) => {
    renderSpinner(index);
  });
}

function renderSpinner(index) {
  const racingProgress = document.getElementsByClassName('racing-progress');
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  spinner.insertAdjacentHTML('afterbegin', '');
  racingProgress[index].appendChild(spinner);
}

export function renderWinners(names) {
  setTimeout(() => {
    const racingWinner = document.getElementById('racing-winner');
    racingWinner.insertAdjacentHTML('afterbegin', `🏆 최종우승자: ${names} 🏆`);
  }, (state.racingNumber - 1) * 1000);
}

export function renderRacingInputForm() {
  const racingInputForm = document.getElementById('racing-input-form');
  racingInputForm.style.display = 'flex';
}

export function renderRacingContainer() {
  const racingContainer = document.getElementById('racing-container');
  racingContainer.style.display = 'flex';
}

export function disableUserInput() {
  const carNamesInput = document.getElementById('car-name-input');
  const carNamesInputBtn = document.getElementById('car-name-input-button');
  const racingNumberInput = document.getElementById('racing-number-input');
  const racingNumberInputBtn = document.getElementById('racing-number-input-button');

  carNamesInput.disabled = true;
  carNamesInputBtn.disabled = true;
  racingNumberInput.disabled = true;
  racingNumberInputBtn.disabled = true;
}

export function removeRacingContainer() {
  eraseWinners();
  eraseRacingCars();
  eraseRacingContainer();
  eraseRacingInputForm();
  ableUserInput();
}

function eraseRacingCars() {
  const racingCars = document.getElementById('racing-cars');
  while (racingCars.hasChildNodes()) {
    racingCars.removeChild(racingCars.firstChild);
  }
}

export function eraseWinners(names) {
  const racingWinner = document.getElementById('racing-winner');
  racingWinner.innerHTML = ``;
}

function eraseRacingInputForm() {
  const racingInputForm = document.getElementById('racing-input-form');
  racingInputForm.style.display = 'none';
}

function eraseRacingContainer() {
  const racingContainer = document.getElementById('racing-container');
  racingContainer.style.display = 'none';
}

export function eraseSpinner() {
  const racingProgress = document.getElementsByClassName('racing-progress');
  const spinner = document.getElementsByClassName('spinner');
  setTimeout(() => {
    Array.from(spinner).forEach((element) => {
      element.remove();
    });
  }, (state.racingNumber - 1) * 1000);
}

function ableUserInput() {
  const carNamesInput = document.getElementById('car-name-input');
  const carNamesInputBtn = document.getElementById('car-name-input-button');
  const racingNumberInput = document.getElementById('racing-number-input');
  const racingNumberInputBtn = document.getElementById('racing-number-input-button');

  carNamesInput.disabled = false;
  carNamesInputBtn.disabled = false;
  racingNumberInput.disabled = false;
  racingNumberInputBtn.disabled = false;

  clearInput('car-name-input');
  clearInput('racing-number-input');
}
