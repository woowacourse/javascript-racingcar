import { cars } from '../init/cars.js';
import { SELECTORS } from '../constants/constants.js';
import { carView, arrow } from '../template.js';
import $ from '../utils/dom.js';
import { showElement } from '../utils/setAttribute.js';
import htmlToElement from '../utils/htmlToElement.js';

export default function startRacingGame() {
  showElement($(SELECTORS.RESULT_SCREEN));
  cars.forEach((car) => {
    const carPlayerView = htmlToElement(carView(car.name));
    $(SELECTORS.RESULT_SCREEN).insertAdjacentHTML('beforeend', carPlayerView.innerHTML);
    carPlayerView.querySelector(SELECTORS.CAR_RACING_STATUS).insertAdjacentHTML('beforeend', arrow);
  });
}
