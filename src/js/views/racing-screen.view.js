import { SELECTORS } from '../constants.js';
import $ from '../utils/dom.js';
import { hideElement, showElement } from '../utils/setAttribute.js';

class RacingScreen {
  constructor(delegate) {
    this.delegate = delegate;
    this.init();
  }

  static laneTemplate(name) {
    return `<div class="car-lane">
        <label class="car-name">${name}</label>
        <div class="distance" data-current-distance="0">
        </div>
      </div>`;
  }

  static forwardIcon = `<div class="forward-icon">️⬇️️</div>`;

  init() {
    this.bindViews();
  }

  bindViews() {
    this.$screen = $(SELECTORS.RACING_SCREEN);
    this.$distances = [];
  }

  bindDistances() {
    this.$distances = $(SELECTORS.DISTANCE, this.$screen);
  }

  showScreen() {
    showElement(this.$screen);
  }

  hideScreen() {
    hideElement(this.$screen);
  }

  renderLanes(cars) {
    cars.forEach(({ name }) => {
      const template = RacingScreen.laneTemplate(name);
      this.$screen.insertAdjacentHTML('beforeend', template);
    });
  }

  renderDistances(cars) {
    cars.forEach((car, i) => {
      const $distance = this.$distances[i];
      const currentDistance = parseInt($distance.getAttribute('data-current-distance'), 10);
      $distance.insertAdjacentHTML(
        'beforeend',
        RacingScreen.forwardIcon.repeat(car.distance - currentDistance)
      );
      $distance.setAttribute('data-current-distance', car.distance);
    });
  }

  reset() {
    this.hideScreen();
    // event handler가 등록되어 있지 않기 때문에 innerHTML로 삭제해도 된다
    this.$screen.innerHTML = '';
  }
}

export default RacingScreen;
