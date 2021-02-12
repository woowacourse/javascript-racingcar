import { $ } from '../util-view/querySelector.js';
import { setVisibility } from '../util-view/setVisibility.js';
import { validateCarNames } from '../util-model/validateCarNames.js';
import { generateCarInstances } from '../util-model/generateCarInstances.js';
import { handleRacingCountInput } from './handleRacingCountInput.js';

export const handleCarNameInput = () => {
  const $carNameInput = $('#car-name-input');
  const cars = generateCarInstances($carNameInput.value);
  const errorMessage = validateCarNames(cars);

  if (errorMessage) {
    alert(errorMessage);
    $carNameInput.value = '';
    return;
  }
  insertCarHTML(cars);
  $('#racing-count-submit').addEventListener('click', () =>
    handleRacingCountInput(cars),
  );
  setVisibility($('#racing-count-section'), true);
};

const insertCarHTML = (cars) => {
  $('#game-process-screen').innerHTML = cars
    .map((car) => carTemplate(car.name))
    .join('');
};

const carTemplate = (carName) => {
  return `<div class="car" data-name=${carName}>
            <div class="car-player mr-2" data-forward-count="0">${carName}</div>
              ${loaderTemplate()}
          </div>`;
};

const loaderTemplate = () => {
  return `<div class="d-flex justify-center mt-4">
            <div class="relative spinner-container" hidden>
              <span class="material spinner"></span>
            </div>
          </div>`;
};
