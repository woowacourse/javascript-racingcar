import { CAR_CAN_GO_COUNT } from '../util/constants.js';

import generateCars from '../model/generateCars.js';
import getWinners from '../model/getWinners.js';

import addGameProcessTemplate from '../view/addGameProcessTemplate.js';
import showWinners from '../view/showWinners.js';
import showRestart from '../view/showRestart.js';
import spinSpinner from '../view/spinSpinner.js';
import alertWinners from '../view/alertWinners.js';

function sortCars(cars) {
  return [...cars].sort((a, b) => b.position - a.position);
}

function isCarCanGo() {
  return Math.floor(Math.random() * 10) >= CAR_CAN_GO_COUNT;
}

function hideSpinner(spinners) {
  spinners.forEach(spinner => {
    spinner.classList.add('display-none');
  });
}

function updateGameProcess() {
  const cars = document.querySelectorAll('.result-car-wrapper');
  cars.forEach(car => {
    if (isCarCanGo()) {
      const arrowContainer = car.querySelector('.result-arrow-container');
      arrowContainer.insertAdjacentHTML('beforeend', '<div class="result-arrow">⬇️️</div>');
    }
  });
}

function endGame(cars) {
  hideSpinner(document.querySelectorAll('.spinner'));
  showWinners(getWinners(cars));
  alertWinners(getWinners(cars));
  showRestart();
}

export default function playRace(count) {
  const cars = generateCars();
  addGameProcessTemplate(cars);
  spinSpinner();

  const timer = setInterval(() => {
    if (count === 0) {
      clearInterval(timer);
      endGame(cars);
      return;
    }
    count -= 1;

    updateGameProcess();
  }, 1000);
}
