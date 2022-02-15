import Car from './model/Car.js';
import { $ } from './utils/dom.js';
import { ERROR_MESSAGE, STANDARD } from './utils/constants.js';
import { isValidLength, isBlank, isEffectiveScore } from './utils/validation.js';
import { showCountInput, showRacingResult, startUpScreen } from './views/setScreen.js';
import { getRandomNumber, getMaxNumber } from './utils/getNumber.js';
import { renderRacingResult, renderFinalWinner } from './views/racingResult.js';

function App() {
  this.cars = [];

  const selectWinner = () => {
    const maxDistance = getMaxNumber(this.cars);
    return this.cars.filter((car) => car.distance === maxDistance);
  };

  const tryCarMoveForward = () => {
    this.cars.forEach((car) => {
      const number = getRandomNumber(STANDARD.MIN_SCORE, STANDARD.MAX_SCORE);
      if (isEffectiveScore(number)) {
        car.moveForward();
      }
    });
  };

  const handleError = (message) => {
    alert(message);
  };

  const isValidCarNames = (carName) => {
    if (!carName.every(isValidLength)) {
      handleError(ERROR_MESSAGE.NAME_TOO_LONG);
      return false;
    }
    if (!carName.every(isBlank)) {
      handleError(ERROR_MESSAGE.NAME_CANNOT_BE_BLANK);
      return false;
    }
    return true;
  };

  const isValidRacingCount = (number) => {
    if (number < STANDARD.MIN_INPUT_COUNT) {
      handleError(ERROR_MESSAGE.COUNT_TOO_SMALL);
      return false;
    }
    return true;
  };

  const generateCars = (carNames) => {
    this.cars = carNames.map((name) => new Car(name));
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
    for (let i = 0; i < inputNumber; i += 1) {
      tryCarMoveForward(inputNumber);
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
    startUpScreen();
  };

  $('#car-names-button').addEventListener('click', handleCarNamesSubmit);

  $('#racing-count-button').addEventListener('click', handleRacingCountSubmit);

  $('#reset-btn').addEventListener('click', restartRacingGame);
}

// eslint-disable-next-line no-new
new App();
