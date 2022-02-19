import { CAR_CAN_GO_COUNT } from '../util/constants.js';

import generateCars from '../model/generateCars.js';
import getWinners from '../model/getWinners.js';

import addGameProcessTemplate from '../view/addGameProcessTemplate.js';
import showWinners from '../view/showWinners.js';
import showRestart from '../view/showRestart.js';
import spinSpinner from '../view/spinSpinner.js';

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
  console.log('게임진행');
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
  showRestart();
}

export default function playRace(count) {
  const cars = generateCars();
  addGameProcessTemplate(cars); // 다른걸루 바꿀예정(템플릿 생성과 같이)
  spinSpinner(); // 계속 돌아감

  const timer = setInterval(() => {
    if (count === 0) {
      clearInterval(timer);
      endGame(cars);
      return;
    }
    count -= 1;

    updateGameProcess(cars);
  }, 1000);
}
