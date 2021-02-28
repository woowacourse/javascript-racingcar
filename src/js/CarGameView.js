import { $ } from './Utils/dom.js';

export default class CarGameView {
  constructor() {
    this.inputCarNamesView = $('#input-names-wrapper');
    this.inputTryCountView = $('#input-count-wrapper');
    this.gameProgressView = $('#display-game-progress');
    this.gameResultView = $('#display-game-result');
  }

  showView($element) {
    $element.style.display = 'block';
  }

  hideView($element) {
    $element.style.display = 'none';
  }

  resetInput($element) {
    $element.querySelector('input').value = '';
  }

  init() {
    this.showView(this.inputCarNamesView);
    this.resetInput(this.inputCarNamesView);
    this.hideView(this.inputTryCountView);
    this.resetInput(this.inputTryCountView);
    this.hideView(this.gameProgressView);
    this.hideView(this.gameResultView);
  }

  renderGameProgress(cars) {
    $('#racing-progress').innerHTML = this.getGameProgressTemplate(cars);
  }

  getGameProgressTemplate(cars) {
    return cars
      .map(
        (car) => `
        <div>
          <div class="car-player mr-2" data-position=${car.getPosition()}>${car.getName()}</div>
          ${this.getForwardIconsTemplate(car.getPosition())}
          <div class="relative spinner-container mt-2">
            <span class="material spinner"></span>
          </div>
        </div>`
      )
      .join('');
  }

  getForwardIconsTemplate(count) {
    return '<div class="forward-icon mt-2">⬇️️</div>'.repeat(count);
  }

  renderWinners(winner) {
    $('#winners').innerText = `🏆 최종 우승자: ${winner} 🏆`;
  }
}
