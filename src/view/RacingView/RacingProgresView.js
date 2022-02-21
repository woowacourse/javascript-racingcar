import { COMMENT, SELECTOR } from '../../constants/constants.js';
import DomUtils from '../../utils/dom-utils.js';

export default class RacingProgressView {
  #$racingProgressNode;

  constructor() {
    this.createContainer();
  }

  createContainer() {
    this.#$racingProgressNode = document.createElement('section');
    this.#$racingProgressNode.id = SELECTOR.ID.RACING_PROGRESS_CONTAINER;
    this.#$racingProgressNode.ariaLabel = SELECTOR.ID.RACING_PROGRESS_TITLE;
    this.insertTitle();
  }

  insertTitle() {
    const $racingProgressTitle = document.createElement('h2');
    $racingProgressTitle.textContent = COMMENT.RACING_PROGRESS_TITLE;
    $racingProgressTitle.hidden = true;
    $racingProgressTitle.id = SELECTOR.ID.RACING_PROGRESS_TITLE;
    this.#$racingProgressNode.appendChild($racingProgressTitle);
  }

  renderProgress(names) {
    [
      ...this.#$racingProgressNode.querySelectorAll(
        `.${SELECTOR.CLASS.CAR_PROGRESS_CONTAINER}`
      )
    ]
      .filter((element) => names.includes(element.dataset.name))
      .forEach((element) => {
        element
          .querySelector(`.${SELECTOR.CLASS.CAR_PROGRESS_NAME}`)
          .insertAdjacentElement(
            'afterend',
            DomUtils.createCarOneStepElement()
          );
      });
  }

  initCarList(names, round) {
    names.forEach((name) => {
      this.#$racingProgressNode.appendChild(
        DomUtils.createCarProgressElementWithName(name, round)
      );
    });
  }

  removeChilds() {
    while (this.#$racingProgressNode.firstChild) {
      this.#$racingProgressNode.removeChild(
        this.#$racingProgressNode.firstChild
      );
    }
  }

  get node() {
    return this.#$racingProgressNode;
  }
}
