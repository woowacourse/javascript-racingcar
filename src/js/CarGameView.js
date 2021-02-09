export default class CarGameView {
  constructor($element) {
    this.inputCarNamesView = $element.querySelector('#input-car-names');
    this.inputTryCountView = $element.querySelector('#input-try-count');
    this.gameProgressView = $element.querySelector('#display-game-progress');
    this.gameResultView = $element.querySelector('#display-game-result');
    this.carNames = '';
  }

  showView($element) {
    $element.style.display = '';
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

  displayProgress(distance) {
    alert(distance);
  };
}
