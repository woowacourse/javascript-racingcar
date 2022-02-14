import { SELECTOR } from '../constants/constants.js';

export default class DomUtils {
  static $(id) {
    return document.getElementById(id);
  }

  static createWinnerElement(winnerList) {
    const $winnerContainer = document.createElement('section');
    $winnerContainer.id = SELECTOR.ID.RACING_RESULT_CONTAINER;

    const $winnerSpan = document.createElement('h2');
    $winnerSpan.id = SELECTOR.ID.WINNER_SPAN;
    $winnerSpan.innerText = `🏆 최종 우승자: ${winnerList.join(', ')}🏆`;

    const $restartButton = document.createElement('button');
    $restartButton.id = SELECTOR.ID.RESTART_BUTTON;
    $restartButton.innerText = '다시 시작하기';

    $winnerContainer.appendChild($winnerSpan);
    $winnerContainer.appendChild($restartButton);

    return $winnerContainer;
  }

  static createRacingProgressElement(cars) {
    const $racingProgressNode = document.createElement('section');
    $racingProgressNode.id = SELECTOR.ID.RACING_PROGRESS_CONTAINER;

    cars.forEach((car) => {
      $racingProgressNode.appendChild(this.createCarProgressElement(car));
    });

    return $racingProgressNode;
  }

  static createCarProgressElement(car) {
    const $carProgressNode = document.createElement('div');
    $carProgressNode.className = SELECTOR.CLASS.CAR_PROGRESS_CONTAINER;

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
    $carProgressName.className = SELECTOR.CLASS.CAR_PROGRESS_NAME;
    $carProgressName.innerText = name;

    return $carProgressName;
  }

  static createCarProgressStatusElement(position) {
    return Array(position)
      .fill()
      .map(() => {
        const $carProgressStatus = document.createElement('div');
        $carProgressStatus.className = SELECTOR.CLASS.CAR_PROGRESS_STATUS;
        $carProgressStatus.innerText = '⬇';

        return $carProgressStatus;
      });
  }
}
