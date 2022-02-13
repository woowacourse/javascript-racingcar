import { $ } from './utils/dom.js';
import { ERROR_MESSAGE, GAME } from './utils/constants.js';
import { isValidLength, isBlank, isEffectiveScore } from './utils/validation.js';
import { showCountInput, showRacingResult, startUpScreen } from './views/setScreen.js';
import { randomNumber, maxNumber } from './utils/getNumber.js';
import { renderRacingResult, renderFinalWinner } from './views/racingResult.js';

function App() {
  this.cars = [];

  const selectWinner = () => {
    const maxDistance = maxNumber(this.cars);
    return this.cars.filter((car) => car.distance === maxDistance);
  };

  const increaseCarDistance = (index, inputNumber) => {
    for (let i = 0; i < inputNumber; i += 1) {
      const number = randomNumber(GAME.MIN_SCORE, GAME.MAX_SCORE);
      if (isEffectiveScore(number)) {
        this.cars[index].distance += 1;
      }
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

    const finalWinner = selectWinner()
      .map((winner) => winner.name)
      .join(', ');
    renderRacingResult(this.cars);
    renderFinalWinner(finalWinner);
    showRacingResult();
  };

  const restartRacingGame = () => {
    this.cars = [];
    $('#car-names-input').value = '';
    $('#racing-count-input').value = '';
    $('#result-racing').innerHTML = '';
    startUpScreen();
  };

  $('#car-names-button').addEventListener('click', handleCarNamesSubmit);

  $('#racing-count-button').addEventListener('click', handleRacingCountSubmit);

  $('#reset-btn').addEventListener('click', restartRacingGame);
}

// eslint-disable-next-line no-new
new App();
