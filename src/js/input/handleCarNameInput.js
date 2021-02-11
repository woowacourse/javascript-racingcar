import { GAME, ERR_MESSAGE } from '../utils/constant.js';
import { setDisabled, setVisibility } from '../utils/setAttribute.js';

const carTemplate = (carName) => {
  return `<div class="car" data-name=${carName}>
            <div class="car-player mr-2" data-forward-count="0">${carName}</div>
            <div class="d-flex justify-center mt-4">
              <div class="relative spinner-container">
                <span class="material spinner"></span>
              </div>
            </div>
          </div>`;
};

const createCars = (carNames) => {
  const $gameProcessScreen = document.querySelector('#game-process-screen');

  $gameProcessScreen.innerHTML = carNames
    .map((carName) => carTemplate(carName))
    .join('');
};

const isValidLength = (name) => {
  return name.length <= GAME.MAX_CAR_NAME_LENGTH;
};

const isBlank = (name) => {
  return name.length >= GAME.MIN_CAR_NAME_LENGTH;
};

const isValidCarName = (carNames) => {
  if (!carNames.every((carName) => isValidLength(carName))) {
    alert(ERR_MESSAGE.NAME_TOO_LONG);
    return false;
  }
  if (!carNames.every((carName) => isBlank(carName))) {
    alert(ERR_MESSAGE.NAME_CANNOT_BE_BLANK);
    return false;
  }
  return true;
};

export const handleCarNameInput = () => {
  const $carNameInput = document.querySelector('#car-name-input');
  const $carNameSubmit = document.querySelector('#car-name-submit');
  const $racingCountSection = document.querySelector('#racing-count-section');

  const carNames = $carNameInput.value.split(',').map((car) => car.trim());
  if (!isValidCarName(carNames)) {
    $carNameInput.value = '';
    return;
  }

  setVisibility($racingCountSection, true);
  setDisabled($carNameSubmit, true);
  createCars(carNames);
};
