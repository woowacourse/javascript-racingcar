export default class DomUtils {
  static createWinnerElement(winnerList) {
    const $winnerContainer = document.createElement('section');
    $winnerContainer.id = 'racing-result-container';

    const $winnerSpan = document.createElement('h2');
    $winnerSpan.id = 'racing-result';
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

    const $carProgressName = DomUtils.createCarProgressNameElement(car.name);
    $carProgressNode.appendChild($carProgressName);

    const $carProgressStatusList = DomUtils.createCarProgressStatusElement(
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
