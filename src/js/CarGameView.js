export default class CarGameView {
  constructor($element) {
    this.$element = $element;
    this.carNamesView = $element.querySelector('#car-names-container');
    this.carNamesInput = $element.querySelector('#car-names-input');
    this.tryCountView = $element.querySelector('#try-count-container');
    this.tryCountInput = $element.querySelector('#try-count-input');
    this.gameProgressView = $element.querySelector('#game-progress-container');
    this.gameResultView = $element.querySelector('#game-result-container');
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
    this.showView(this.carNamesView);
    this.resetInput(this.carNamesInput);
    this.hideView(this.tryCountView);
    this.resetInput(this.tryCountInput);
    this.hideView(this.gameProgressView);
    this.hideView(this.gameResultView);
  }

  displayTryCountView() {
    this.showView(this.tryCountView);
  }

  resetTryCountView() {
    this.resetInput(this.tryCountInput);
    this.hideView(this.gameProgressView);
    this.hideView(this.gameResultView);
  }

  displayProgress(cars) {
    console.log("DRAW");
    this.gameProgressView.querySelector('.d-flex').innerHTML = this.getProgressTemplate(cars);
    this.showView(this.gameProgressView);
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

  hideSpinner() {
    Array.from(this.$element.querySelectorAll('.spinner-container')).forEach(spinner => this.hideView(spinner));
  }

  getForwardIconsTemplate(count) {
    return '<div class="forward-icon mt-2">⬇️️</div>'.repeat(count);
  }

  displayWinners(winner) {
    this.gameResultView.querySelector('h2').innerText = `🏆 최종 우승자: ${winner} 🏆`;
    this.showView(this.gameResultView);
  }

  getCarNames() {
    return this.carNamesInput.value.split(',').map((name) => name.trim());
  }

  getTryCount() {
    return Number(this.tryCountInput.value);
  }

  alertError(ErrorMessage) {
    alert(ErrorMessage);
  }
}
