export default class CarGameView {
  constructor() {
    this.inputCarNamesView = document.querySelector('#input-car-names');
    this.inputTryCountView = document.querySelector('#input-try-count');
    this.gameProgressView = document.querySelector('#display-game-progress');
    this.gameResultView = document.querySelector('#display-game-result');
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
    this.gameProgressView.querySelector('.d-flex').innerHTML = this.getGameProgressTemplate(cars);
  }

  getGameProgressTemplate(cars) {
    return cars
      .map(
        (car) => `
        <div>
          <div class="car-player mr-2" data-position=${car.getPosition()}>${car.getName()}</div>
          ${this.getForwardIconsTemplate(car.getPosition())}
        </div>`
      )
      .join('');
  }

  getForwardIconsTemplate(count) {
    return '<div class="forward-icon mt-2">⬇️️</div>'.repeat(count);
  }

  renderWinners(winner) {
    this.gameResultView.querySelector('h2').innerText = `🏆 최종 우승자: ${winner} 🏆`;
  }
}
