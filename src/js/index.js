import $ from './utils/dom.js';
import { ERR_MESSAGE } from './utils/constants.js';
import { isValidLength, isBlank } from './utils/validation.js';
import { showCountInput } from './views/setScreen.js';

function App() {
  this.car = [];
  this.count = 0;

  const isValidCarNames = (carNames) => {
    if (!carNames.every(isValidLength)) {
      alert(ERR_MESSAGE.NAME_TOO_LONG);
      return false;
    }
    if (!carNames.every(isBlank)) {
      alert(ERR_MESSAGE.NAME_CANNOT_BE_BLANK);
      return false;
    }
    return true;
  };

  const handleCarNamesSubmit = () => {
    const carNames = $('#car-names-input')
      .value.split(',')
      .map((car) => car.trim());

    if (!isValidCarNames(carNames)) {
      $('#car-names-input').value = '';
      return;
    }
    showCountInput();
  };

  $('#car-names-button').addEventListener('click', handleCarNamesSubmit);

  // $('#racing-count-button').addEventListener('click', handleRacingCountSubmit);
}

// eslint-disable-next-line no-new
new App();
