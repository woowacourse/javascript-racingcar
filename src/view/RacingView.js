import DomUtils from '../utils/dom-utils.js';

export default class RacingView {
  constructor() {
    this.$app = document.getElementById('app');
    this.$namesForm = document.getElementById('car-names-form');
    this.$countForm = document.getElementById('racing-count-form');
  }

  renderProgress(cars) {
    this.$app.appendChild(DomUtils.createRacingProgressElement(cars));
  }

  renderResult(winnerList) {
    this.$app.appendChild(DomUtils.createWinnerElement(winnerList));
  }

  reset() {
    this.removeProgress();
    this.removeResult();
    RacingView.clearInput();
    this.activateNamesForm();
    this.deactivateCountForm();
  }

  removeProgress() {
    const $racingProgressNode = document.getElementById(
      'racing-progress-container'
    );
    this.$app.removeChild($racingProgressNode);
  }

  removeResult() {
    const $racingResultNode = document.getElementById(
      'racing-result-container'
    );
    this.$app.removeChild($racingResultNode);
  }

  static clearInput() {
    document.getElementById('car-names-input').value = '';
    document.getElementById('racing-count-input').value = '';
  }

  activateCountForm() {
    for (let i = 0; i < this.$countForm.childNodes.length; i += 1) {
      this.$countForm.childNodes[i].disabled = false;
    }
  }

  deactivateCountForm() {
    for (let i = 0; i < this.$countForm.childNodes.length; i += 1) {
      this.$countForm.childNodes[i].disabled = true;
    }
  }

  activateNamesForm() {
    for (let i = 0; i < this.$namesForm.childNodes.length; i += 1) {
      this.$namesForm.childNodes[i].disabled = false;
    }
  }

  deactivateNamesForm() {
    for (let i = 0; i < this.$namesForm.childNodes.length; i += 1) {
      this.$namesForm.childNodes[i].disabled = true;
    }
  }
}
