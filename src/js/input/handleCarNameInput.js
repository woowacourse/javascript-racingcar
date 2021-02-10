import { $ } from '../utils/querySelector.js';
import { validateCarNames } from '../utils/validateCarNames.js';
import { setVisibility } from '../utils/setVisibility.js';

export const handleCarNameInput = () => {
  const $carNameInput = document.querySelector('#car-name-input');
  const carNames = $carNameInput.value.split(',').map((car) => car.trim());
  const errorMessage = validateCarNames(carNames);

  if (errorMessage) {
    alert(errorMessage);
    $carNameInput.value = '';
    return;
  }
  setVisibility($('#racing-count-section'), true);
  insertCarHTML(carNames);
};

const insertCarHTML = (carNames) => {
  const $gameProcessScreen = document.querySelector('#game-process-screen');

  $gameProcessScreen.innerHTML = carNames
    .map((carName) => carTemplate(carName))
    .join('');
};

const carTemplate = (carName) => {
  return `<div class="car" data-name=${carName}>
            <div class="car-player mr-2" data-forward-count="0">${carName}</div>
          </div>`;
};
