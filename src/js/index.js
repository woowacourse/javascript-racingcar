import $ from './utils/dom.js';
import { ERR_MESSAGE, GAME } from './utils/constants.js';
import { isValidLength, isBlank } from './utils/validation.js';
import { showCountInput } from './views/setScreen.js';

function App() {
  this.carName = [];
  this.count = 0;

  const isValidCarNames = (carName) => {
    if (!carName.every(isValidLength)) {
      alert(ERR_MESSAGE.NAME_TOO_LONG);
      return false;
    }
    if (!carName.every(isBlank)) {
      alert(ERR_MESSAGE.NAME_CANNOT_BE_BLANK);
      return false;
    }
    return true;
  };

  const isValidRacingCount = (count) => {
    if (count < GAME.MIN_INPUT_COUNT) {
      alert(ERR_MESSAGE.COUNT_TOO_SMALL);
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
    this.count = $('#racing-count-input').value;

    if (!isValidRacingCount(this.count)) {
      return;
    }
    // startRacingGame(this.count);
  };

  $('#car-names-button').addEventListener('click', handleCarNamesSubmit);

  $('#racing-count-button').addEventListener('click', handleRacingCountSubmit);
}

// eslint-disable-next-line no-new
new App();
