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

  static createCarProgressElement(car) {
    const $carProgressNode = this.createCarProgressNode();

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

  static createCarProgressElementWithLoading(car) {
    const $carProgressNode = this.createCarProgressElement(car);
    $carProgressNode.appendChild(this.spinner());

    return $carProgressNode;
  }

  static createCarProgressNode() {
    const $carProgressNode = document.createElement('div');
    $carProgressNode.className = SELECTOR.CLASS.CAR_PROGRESS_CONTAINER;
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
      .map(() => this.createCarOneStepElement());
  }

  static createCarOneStepElement() {
    const $carProgressStatus = document.createElement('div');
    $carProgressStatus.className = SELECTOR.CLASS.CAR_PROGRESS_STATUS;
    $carProgressStatus.innerText = '⬇';

    return $carProgressStatus;
  }

  static controlNodeDisabled(node, isDisabled) {
    const element = node;
    element.disabled = isDisabled;
  }

  static spinner() {
    const $carProgressStatus = document.createElement('div');
    $carProgressStatus.className = SELECTOR.CLASS.CAR_PROGRESS_LOADGING;
    const $circle = document.createElement('img');
    $circle.src = '../../public/assets/img/loading.png';
    $carProgressStatus.append($circle);
    const makeCb = (target, duration) => {
      let start;
      return function cb(timestamp) {
        if (!start) {
          start = timestamp;
        }
        const elasped = timestamp - start;
        const node = target;
        node.style.transform = `rotate(${elasped}deg)`;
        if (elasped < duration) {
          requestAnimationFrame(cb);
        }
      };
    };
    requestAnimationFrame(makeCb($carProgressStatus, 2000));
    return $carProgressStatus;
  }
}
