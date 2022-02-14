import { clearInput } from '../controllers/utils.js';
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

export function renderProgressArrow(index) {
  const racingProgress = document.getElementsByClassName('racing-progress');
  const racingArrow = document.createElement('div');
  racingArrow.className = 'racing-progress-arrow';
  racingArrow.innerHTML = '⬇️️';
  racingProgress[index].appendChild(racingArrow);
}

export function renderWinners(names) {
  const racingWinner = document.getElementById('racing-winner');
  racingWinner.insertAdjacentHTML('afterbegin', `🏆 최종우승자: ${names} 🏆`);
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
  resetWinners();
  derenderRacingCars();
  derenderRacingContainer();
  derenderRacingInputForm();
  ableUserInput();
}

function derenderRacingCars() {
  const racingCars = document.getElementById('racing-cars');
  while (racingCars.hasChildNodes()) {
    racingCars.removeChild(racingCars.firstChild);
  }
}

export function resetWinners(names) {
  const racingWinner = document.getElementById('racing-winner');
  racingWinner.innerHTML = ``;
}

function derenderRacingInputForm() {
  const racingInputForm = document.getElementById('racing-input-form');
  racingInputForm.style.display = 'none';
}

function derenderRacingContainer() {
  const racingContainer = document.getElementById('racing-container');
  racingContainer.style.display = 'none';
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
