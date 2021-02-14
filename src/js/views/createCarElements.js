import { $ } from './utils/querySelector.js';

export const createCarElements = (cars) => {
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
