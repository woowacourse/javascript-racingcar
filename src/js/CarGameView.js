import { show, hide, initInputValue, disableElement, enableElement } from './utils.js';

export default class CarGameView {
  constructor($element) {
    this.carNamesView = $element.querySelector('#car-names-container');
    this.carNamesInput = $element.querySelector('#car-names-input');
    this.carNamesCheckButton = $element.querySelector('#car-names-check-button');
    this.tryCountView = $element.querySelector('#try-count-container');
    this.tryCountInput = $element.querySelector('#try-count-input');
    this.tryCountCheckButton = $element.querySelector('#try-count-check-button');
    this.gameProgressView = $element.querySelector('#game-progress-container');
    this.gameResultView = $element.querySelector('#game-result-container');
  }

  init() {
    show(this.carNamesView);
    initInputValue(this.carNamesInput);
    hide(this.tryCountView);
    initInputValue(this.tryCountInput);
    hide(this.gameProgressView);
    hide(this.gameResultView);
  }

  displayTryCountView() {
    show(this.tryCountView);
  }

  resetTryCountView() {
    initInputValue(this.tryCountInput);
    hide(this.gameProgressView);
    hide(this.gameResultView);
  }

  displayProgress(cars) {
    this.gameProgressView.querySelector('.d-flex').innerHTML = this.getProgressTemplate(cars);
    show(this.gameProgressView);
  }

  getProgressTemplate(cars) {
    return cars.map((car) => `
        <div class="car-player-container">
          <div class="car-player mr-2" data-position=${car.getPosition()}>${car.getName()}</div>
          ${this.getForwardIconsTemplate(car.getPosition())}
          <div class="relative spinner-container">
            <span class="material spinner"></span>
          </div>
        </div>`).join('');
  }

  getForwardIconsTemplate(count) {
    return '<div class="forward-icon mt-2">⬇️️</div>'.repeat(count);
  }

  displayWinners(winner) {
    this.gameResultView.querySelector('h2').innerText = `🏆 최종 우승자: ${winner} 🏆`;
    show(this.gameResultView);
  }

  getCarNamesInputValue() {
    return this.carNamesInput.value.split(',').map((name) => name.trim());
  }

  getTryCountInputValue() {
    return Number(this.tryCountInput.value);
  }

  hideGameProgress() {
    hide(this.gameProgressView);
  }

  hideGameResult() {
    hide(this.gameResultView);
  }

  disableAllInputAndCheckButton() {
    disableElement(this.carNamesInput);
    disableElement(this.carNamesCheckButton);
    disableElement(this.tryCountInput);
    disableElement(this.tryCountCheckButton);
  }

  enableAllInputAndCheckButton() {
    enableElement(this.carNamesInput);
    enableElement(this.carNamesCheckButton);
    enableElement(this.tryCountInput);
    enableElement(this.tryCountCheckButton);
  }
}
