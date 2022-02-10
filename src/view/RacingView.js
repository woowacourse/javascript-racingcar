export default class RacingView {
  constructor() {
    this.$app = document.getElementById('app');
  }

  // [['east',4]]
  // ['east','west'], [ 2 , 4 ]
  // [{name:'east', postion:4}]
  // [Car('east',4), Car('west',5)]

  //     this.view.renderWinner(this.model.winner);
  renderProgress(eachTurnResult) {
    this.$app.insertAdjacentElement('beforeend', eachTurnResult);
  }

  removeProgress() {
    const $racingProgressNode = document.getElementById(
      'racing-progress-container'
    );
    this.$app.removeChlid($racingProgressNode);
  }

  renderResult(winnerList) {
    this.$app.appendChild(RacingView.createWinnerElement(winnerList));
  }

  removeResult() {
    const $racingResultNode = document.getElementById(
      'racing-result-container'
    );
    this.$app.removeChlid($racingResultNode);
  }

  reset() {
    this.removeProgress();
    this.removeResult();
  }

  static createWinnerElement(winnerList) {
    const $winnerContainer = document.createElement('section');
    $winnerContainer.id = 'racing-result-container';

    const $winnerSpan = document.createElement('h2');
    $winnerSpan.innerText = `🏆 최종 우승자: ${winnerList.join(', ')}🏆`;

    const $restartButton = document.createElement('button');
    $restartButton.id = 'restart-button';
    $restartButton.innerText = '다시 시작하기';

    $winnerContainer.appendChild($winnerSpan);
    $winnerContainer.appendChild($restartButton);

    return $winnerContainer;
  }
}
