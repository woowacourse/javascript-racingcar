export default class CarGameView {
  constructor($element) {
    this.inputCarNamesView = $element.querySelector('#input-car-names');
    this.inputTryCountView = $element.querySelector('#input-try-count');
    this.gameProgressView = $element.querySelector('#display-game-progress');
    this.gameResultView = $element.querySelector('#display-game-result');
  }

  showView($element) {
    $element.style.display = '';
  }

  hideView($element) {
    $element.style.display = 'none';
  }

  init() {
    this.showView(this.inputCarNamesView);
    this.hideView(this.inputTryCountView);
    this.hideView(this.gameProgressView);
    this.hideView(this.gameResultView);
  }
}
