export default class CarGameView {
  constructor($element) {
    this.inputCarNamesView = $element.querySelector('#car-names-container');
    this.inputCarNames = $element.querySelector('#car-names-input');
    this.inputTryCountView = $element.querySelector('#try-count-container');
    this.inputTryCount = $element.querySelector('#try-count-input');
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
    this.showView(this.inputCarNamesView);
    this.resetInput(this.inputCarNames);
    this.hideView(this.inputTryCountView);
    this.resetInput(this.inputTryCount);
    this.hideView(this.gameProgressView);
    this.hideView(this.gameResultView);
  }

  displayProgress(cars) {
    this.gameProgressView.querySelector('.d-flex').innerHTML = this.displayProgressContainer(cars);
  }

  displayProgressContainer(cars) {
    return cars.map((car) => `
        <div>
          <div class="car-player mr-2" data-position=${car.getPosition()}>${car.getName()}</div>
          ${this.displayForwardIcons(car.getPosition())}
        </div>`).join('');
  }

  displayForwardIcons(count) {
    return '<div class="forward-icon mt-2">⬇️️</div>'.repeat(count);
  }

  displayWinners(winner) {
    this.gameResultView.querySelector('h2').innerText = `🏆 최종 우승자: ${winner} 🏆`;
  }
}
