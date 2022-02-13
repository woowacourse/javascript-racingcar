import $ from './utils/dom.js';
import { ERROR_MESSAGE, GAME } from './utils/constants.js';
import { isValidLength, isBlank } from './utils/validation.js';
import { showCountInput, showRacingResult } from './views/setScreen.js';
import { getRandomNumber } from './utils/randomNumber.js';
import { isEffectiveScore } from './utils/isEffectiveScore.js';

function App() {
  this.carName = [];
  this.distance = [];

  const carPlayerTemplate = (name, index) => {
    return `
      <div class="car-name mr-2">
        <div class="car-player">${name}</div>
        ${'<div class="forward-icon mt-2">⬇️️</div>'.repeat(this.distance[index])}
      </div>
    `;
  };

  const renderRacingResult = () => {
    this.carName.forEach((name, index) => {
      $('#racing-result').insertAdjacentHTML('beforeend', carPlayerTemplate(name, index));
    });
  };

  const increaseCarDistance = (inputNumber) => {
    let count = 0;
    for (let i = 0; i < inputNumber; i += 1) {
      const randomNumber = getRandomNumber(GAME.MIN_SCORE, GAME.MAX_SCORE);
      if (isEffectiveScore(randomNumber)) {
        count += 1;
      }
    }
    this.distance.push(count);
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

  const isValidRacingCount = (count) => {
    if (count < GAME.MIN_INPUT_COUNT) {
      alert(ERROR_MESSAGE.COUNT_TOO_SMALL);
      return false;
    }
    return true;
  };

  const handleCarNamesSubmit = () => {
    this.carName = $('#car-names-input')
      .value.split(',')
      .map((car) => car.trim());
    if (!isValidCarNames(this.carName)) {
      $('#car-names-input').value = '';
      return;
    }
    showCountInput();
  };

  const handleRacingCountSubmit = () => {
    const inputNumber = $('#racing-count-input').value;
    if (!isValidRacingCount(inputNumber)) {
      return;
    }
    for (let i = 0; i < this.carName.length; i += 1) {
      increaseCarDistance(inputNumber);
    }
    showRacingResult();
    renderRacingResult();
  };

  $('#car-names-button').addEventListener('click', handleCarNamesSubmit);

  $('#racing-count-button').addEventListener('click', handleRacingCountSubmit);
}

// eslint-disable-next-line no-new
new App();
