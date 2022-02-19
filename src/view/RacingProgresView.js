import { COMMENT, SELECTOR } from '../constants/constants.js';
import DomUtils from '../utils/dom-utils.js';

export default class RacingProgressView {
  constructor() {
    this.createContainer();
  }

  createContainer() {
    this.$racingProgressNode = document.createElement('section');
    this.$racingProgressNode.id = SELECTOR.ID.RACING_PROGRESS_CONTAINER;
    this.$racingProgressNode.ariaLabel = SELECTOR.ID.RACING_PROGRESS_TITLE;
    this.insertTitle();
  }

  insertTitle() {
    const $racingProgressTitle = document.createElement('h2');
    $racingProgressTitle.textContent = COMMENT.RACING_PROGRESS_TITLE;
    $racingProgressTitle.hidden = true;
    $racingProgressTitle.id = SELECTOR.ID.RACING_PROGRESS_TITLE;
    this.$racingProgressNode.appendChild($racingProgressTitle);
  }

  renderProgress(cars) {
    this.removeChilds();
    this.insertTitle();
    cars.forEach((car) => {
      this.$racingProgressNode.appendChild(
        DomUtils.createCarProgressElementWithLoading(car)
      );
    });
  }

  renderFinalProgress(cars) {
    this.removeChilds();
    this.insertTitle();
    cars.forEach((car) => {
      this.$racingProgressNode.appendChild(
        DomUtils.createCarProgressElement(car)
      );
    });
  }

  removeChilds() {
    while (this.$racingProgressNode.firstChild) {
      this.$racingProgressNode.removeChild(this.$racingProgressNode.firstChild);
    }
  }

  get node() {
    return this.$racingProgressNode;
  }
}
