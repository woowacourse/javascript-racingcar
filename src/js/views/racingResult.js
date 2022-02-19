import { $, $$ } from '../utils/dom.js';
import { hideElement } from '../utils/attribute.js';
import { SELECTOR } from '../utils/constants.js';

const arrowTemplate = '<div class="forward-icon mt-2">⬇️️</div>';

const carPlayerTemplate = (name) => {
  return `
    <div>
      <div class="car-player mr-2" data-car-name=${name}>${name}</div>
      <div class="d-flex justify-content-center mt-4">
        <div class="relative spinner-container">
          <span class="material spinner"></span>
        </div>
      </div>
    </div>
  `;
};

export const renderFinalWinner = (finalWinner) => {
  $(SELECTOR.FINAL_WINNER).innerHTML = `🏆 최종 우승자: ${finalWinner} 🏆`;
};

export const renderRacingResult = (cars) => {
  cars.forEach(({ name }) => {
    $(SELECTOR.RACING_STATUS).insertAdjacentHTML('beforeend', carPlayerTemplate(name));
  });
};

export const renderArrow = (name) => {
  $(`${SELECTOR.CAR_PLAYER}[data-car-name=${name}]`).insertAdjacentHTML('afterend', arrowTemplate);
};

export const removeSpinner = () => {
  $$(SELECTOR.SPINNER).forEach((element) => hideElement(element));
};

export const startUpScreen = () => {
  $(SELECTOR.CAR_NAMES_INPUT).value = '';
  $(SELECTOR.RACING_COUNT_INPUT).value = '';
  $(SELECTOR.RACING_STATUS).innerText = '';
  hideElement($(SELECTOR.RACING_COUNT_CONTAINER));
  hideElement($(SELECTOR.RACING_CONTAINER));
  hideElement($(SELECTOR.RESULT_CONTAINER));
};
