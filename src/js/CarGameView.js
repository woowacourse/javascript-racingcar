import elements from './Utils/elements.js';

export default class CarGameView {
  constructor() {
    this.inputCarNamesView = elements.$inputNameWrapper;
    this.inputTryCountView = elements.$inputCountWrapper;
    this.gameProgressView = elements.$gameProgressSection;
    this.gameResultView = elements.$gameResultSection;
  }

  showView($element) {
    $element.style.display = 'block';
  }

  hideView($element) {
    $element.style.display = 'none';
  }

  resetInput($element) {
    $element.value = '';
  }

  init() {
    this.resetInput(elements.$inputCarNames);
    this.resetInput(elements.$inputTryCount);

    this.showView(this.inputCarNamesView);
    this.hideView(this.inputTryCountView);
    this.hideView(this.gameProgressView);
    this.hideView(this.gameResultView);
  }

  renderGameProgress(cars) {
    elements.$racingProcessDiv.innerHTML = this.getGameProgressTemplate(cars);
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
    elements.$winners.innerText = `🏆 최종 우승자: ${winner} 🏆`;
  }
}
