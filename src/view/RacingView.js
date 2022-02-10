export default class RacingView {
  constructor() {
    this.$app = document.getElementById('app');
  }

  // [['east',4]]
  // ['east','west'], [ 2 , 4 ]
  // [{name:'east', postion:4}]
  // [Car('east',4), Car('west',5)]

  //     this.view.renderWinner(this.model.winner);

  //   static createEachTurnResultDom(obj) {
  //     const resultContainer = document.createElement('div');
  //     resultContainer.id = 'resultContainer';

  //     for (const car in obj) {
  //       if (Object.hasOwnProperty.call(obj, car)) {
  //         const resultSpan = document.createElement('span');
  //         resultSpan.innerText = `${car}: ${'-'.repeat(obj[car])}`;
  //         resultContainer.appendChild(resultSpan);
  //         resultContainer.appendChild(document.createElement('br'));
  //       }
  //     }
  //     resultContainer.appendChild(document.createElement('br'));

  //     return resultContainer;
  //   }

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

    const $carProgressStatus = RacingView.createCarProgressStatusElement(
      car.position
    );
    $carProgressNode.appendChild($carProgressStatus);

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

  renderProgress(cars) {
    this.$app.appendChild(RacingView.createRacingProgressElement(cars));
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
