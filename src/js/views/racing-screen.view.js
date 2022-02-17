import { SELECTORS } from '../constants.js';
import { querySelector, querySelectorAll } from '../utils/dom.js';
import { hideElement, showElement } from '../utils/visibility.js';

class RacingScreen {
  constructor(delegate) {
    this.delegate = delegate;
    this.init();
  }

  static laneTemplate(name) {
    return `<div class="car-lane" data-testid="car-lane">
        <label class="car-name" data-testid="car-name">${name}</label>
        <div class="distance" data-current-distance="0" data-testid="distance">
        </div>
      </div>`;
  }

  static forwardIcon = `<div class="forward-icon" data-testid="forward-icon">️⬇️️</div>`;

  init() {
    this.bindViews();
  }

  bindViews() {
    this.$screen = querySelector(SELECTORS.RACING_SCREEN);
    this.$distances = [];
  }

  bindDistances() {
    this.$distances = querySelectorAll(SELECTORS.DISTANCE, this.$screen);
  }

  show() {
    showElement(this.$screen);
  }

  hide() {
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
    this.hide();
    // event handler가 등록되어 있지 않기 때문에 innerHTML로 삭제해도 된다
    this.$screen.innerHTML = '';
  }
}

export default RacingScreen;
