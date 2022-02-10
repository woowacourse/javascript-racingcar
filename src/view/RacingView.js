export default class RacingView {
  constructor() {
    this.$app = document.getElementById('app');
  }

  renderProgress(cars) {
    this.$app.appendChild(RacingView.createRacingProgressElement(cars));
  }

  renderResult(winnerList) {
    this.$app.appendChild(RacingView.createWinnerElement(winnerList));
  }

  reset() {
    this.removeProgress();
    this.removeResult();
    RacingView.clearInput();
  }

  removeProgress() {
    const $racingProgressNode = document.getElementById(
      'racing-progress-container'
    );
    this.$app.removeChild($racingProgressNode);
  }

  removeResult() {
    const $racingResultNode = document.getElementById(
      'racing-result-container'
    );
    this.$app.removeChild($racingResultNode);
  }

  static clearInput() {
    document.getElementById('car-names-input').value = '';
    document.getElementById('racing-count-input').value = '';
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

  static createRacingProgressElement(cars) {
    const $racingProgressNode = document.createElement('section');
    $racingProgressNode.id = 'racing-progress-container';

    cars.forEach((car) => {
      $racingProgressNode.appendChild(this.createCarProgressElement(car));
    });

    return $racingProgressNode;
  }

  static createCarProgressElement(car) {
    const $carProgressNode = document.createElement('div');
    $carProgressNode.className = 'car-progress-container';

    const $carProgressName = RacingView.createCarProgressNameElement(car.name);
    $carProgressNode.appendChild($carProgressName);

    const $carProgressStatusList = RacingView.createCarProgressStatusElement(
      car.position
    );
    $carProgressStatusList.forEach(($carProgressStatus) => {
      $carProgressNode.appendChild($carProgressStatus);
    });

    return $carProgressNode;
  }

  static createCarProgressNameElement(name) {
    const $carProgressName = document.createElement('div');
    $carProgressName.className = 'car-progress-container--name';
    $carProgressName.innerText = name;

    return $carProgressName;
  }

  static createCarProgressStatusElement(postion) {
    const $carProgressStatusList = [];
    for (let i = 0; i < postion; i += 1) {
      const $carProgressStatus = document.createElement('div');
      $carProgressStatus.className = 'car-progress-container--status';
      $carProgressStatus.innerText = '⬇';
      $carProgressStatusList.push($carProgressStatus);
    }
    return $carProgressStatusList;
  }
}
