export default class CarGameView {
  constructor($element) {
    this.inputCarNamesView = $element.querySelector('#input-car-names');
    this.inputTryCountView = $element.querySelector('#input-try-count');
    this.gameProgressView = $element.querySelector('#display-game-progress');
    this.gameResultView = $element.querySelector('#display-game-result');
  }

  showView($element) {
    $element.style.display = 'block';
  }

  hideView($element) {
    $element.style.display = 'none';
  }

  init() {
    this.showView(this.inputCarNamesView);
    this.inputCarNamesView.querySelector('input').value = '';
    this.hideView(this.inputTryCountView);
    this.inputTryCountView.querySelector('input').value = '';
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
