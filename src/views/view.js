import { state } from '../index.js';

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
  console.log(racingProgress);
  const racingArrow = document.createElement('div');
  racingArrow.className = 'racing-progress-arrow';
  racingArrow.innerHTML = '⬇️️';
  racingProgress[index].appendChild(racingArrow);
}

export function renderWinners(names) {
  const racingWinner = document.getElementById('racing-winner');
  racingWinner.innerHTML = `🏆 최종우승자: ${names} 🏆`;
}
