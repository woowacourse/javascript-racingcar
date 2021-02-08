import { VALIDATOR, ERR_MESSAGE } from '../utils/constant.js';

const carTemplate = (carName) => {
  return `<div >
            <div class="car-player mr-2" data-forward-count="0">${carName}</div>
          </div>`;
};

const createCars = (carNames) => {
  const $gameProcessScreen = document.querySelector('#game-process-screen');

  $gameProcessScreen.innerHTML = carNames
    .map((carName) => carTemplate(carName))
    .join('');
};

const isValidLength = (name) => {
  return name.length <= VALIDATOR.MAX_NAME_LENGTH;
};

const isBlank = (name) => {
  return name.length >= VALIDATOR.MIN_NAME_LENGTH;
};

const isValidCarName = (carNames) => {
  if (!carNames.every((carName) => isValidLength(carName))) {
    alert(ERR_MESSAGE.NAME_TOO_LONG);
    return false;
  }
  if (!carNames.every((carName) => isBlank(carName))) {
    alert(ERR_MESSAGE.NAME_BLANK);
    return false;
  }
  return true;
};

export const handleCarNameInput = () => {
  const $carNameInput = document.querySelector('#car-name-input');
  const $racingCountSection = document.querySelector('#racing-count-section');

  const carNames = $carNameInput.value.split(',').map((car) => car.trim());
  if (!isValidCarName(carNames)) {
    return ($carNameInput.value = '');
  }
  $racingCountSection.removeAttribute('hidden');
  createCars(carNames);
};
