import elements from './Utils/elements.js';

export default class CarGameView {
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
    elements.$inputNameForm.reset();
    elements.$inputTryCountForm.reset();

    this.showView(elements.$inputNameSection);
    this.hideView(elements.$inputCountSection);
    this.hideView(elements.$gameProgressSection);
    this.hideView(elements.$gameResultSection);
  }

  renderInitGameProgress(cars) {
    this.showView(elements.$gameProgressSection);
    this.renderGameProgress(cars);
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

  renderResult(winners) {
    this.showView(elements.$gameResultSection);

    elements.$winners.innerText = `🏆 최종 우승자: ${winners} 🏆`;
  }
}
