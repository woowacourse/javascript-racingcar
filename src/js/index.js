import $ from './utils/dom.js';
import { ERROR_MESSAGE, GAME } from './utils/constants.js';
import { isValidLength, isBlank } from './utils/validation.js';
import { showCountInput, showRacingResult } from './views/setScreen.js';
import { getRandomNumber } from './utils/randomNumber.js';
import { isEffectiveScore } from './utils/isEffectiveScore.js';

function App() {
  this.cars = [];

  const carPlayerTemplate = (name, distance) => {
    return `
      <div class="car-name mr-2">
        <div class="car-player">${name}</div>
        ${'<div class="forward-icon mt-2">⬇️️</div>'.repeat(distance)}
      </div>
    `;
  };

  const renderRacingResult = () => {
    this.cars.forEach(({ name, distance }) => {
      $('#racing-result').insertAdjacentHTML('beforeend', carPlayerTemplate(name, distance));
    });
  };

  const increaseCarDistance = (index, inputNumber) => {
    for (let i = 0; i < inputNumber; i += 1) {
      const randomNumber = getRandomNumber(GAME.MIN_SCORE, GAME.MAX_SCORE);
      if (isEffectiveScore(randomNumber)) {
        this.cars[index].distance += 1;
      }
      console.log(this.cars);
    }
  };

  const isValidCarNames = (carName) => {
    if (!carName.every(isValidLength)) {
      alert(ERROR_MESSAGE.NAME_TOO_LONG);
      return false;
    }
    if (!carName.every(isBlank)) {
      alert(ERROR_MESSAGE.NAME_CANNOT_BE_BLANK);
      return false;
    }
    return true;
  };

  const isValidRacingCount = (number) => {
    if (number < GAME.MIN_INPUT_COUNT) {
      alert(ERROR_MESSAGE.COUNT_TOO_SMALL);
      return false;
    }
    return true;
  };

  const generateCars = (carNames) => {
    carNames.forEach((name) => this.cars.push({ name, distance: 0 }));
  };

  const handleCarNamesSubmit = () => {
    const inputCarNames = $('#car-names-input')
      .value.split(',')
      .map((car) => car.trim());
    if (!isValidCarNames(inputCarNames)) {
      $('#car-names-input').value = '';
      return;
    }
    generateCars(inputCarNames);
    showCountInput();
  };

  const handleRacingCountSubmit = () => {
    const inputNumber = $('#racing-count-input').value;
    if (!isValidRacingCount(inputNumber)) {
      return;
    }
    for (let i = 0; i < this.cars.length; i += 1) {
      increaseCarDistance(i, inputNumber);
    }
    showRacingResult();
    renderRacingResult();
  };

  $('#car-names-button').addEventListener('click', handleCarNamesSubmit);

  $('#racing-count-button').addEventListener('click', handleRacingCountSubmit);
}

// eslint-disable-next-line no-new
new App();
