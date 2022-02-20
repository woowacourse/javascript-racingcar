import { COMMENT, SELECTOR, TIME } from '../constants/constants.js';

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
    $restartButton.innerText = COMMENT.RESTART;

    $winnerContainer.appendChild($winnerSpan);
    $winnerContainer.appendChild($restartButton);

    return $winnerContainer;
  }

  static createCarProgressElementWithName(name, round) {
    const $carProgressNode = this.createCarProgressNode(name);

    const $carProgressName = DomUtils.createCarProgressNameElement(name);
    $carProgressNode.appendChild($carProgressName);
    $carProgressNode.appendChild(this.spinner(round));

    return $carProgressNode;
  }

  static createCarProgressNode(name) {
    const $carProgressNode = document.createElement('div');
    $carProgressNode.className = SELECTOR.CLASS.CAR_PROGRESS_CONTAINER;
    $carProgressNode.dataset.name = name;
    return $carProgressNode;
  }

  static createCarProgressNameElement(name) {
    const $carProgressName = document.createElement('div');
    $carProgressName.className = SELECTOR.CLASS.CAR_PROGRESS_NAME;
    $carProgressName.innerText = name;

    return $carProgressName;
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

  static spinner(round) {
    const $carProgressStatus = document.createElement('div');
    $carProgressStatus.className = SELECTOR.CLASS.CAR_PROGRESS_LOADGING;
    const $circle = document.createElement('img');
    $circle.src = '../../public/assets/img/loading.png';
    $carProgressStatus.append($circle);

    requestAnimationFrame(
      DomUtils.animationCallBack(
        $carProgressStatus,
        round * TIME.DELAY_RACE_TIME
      )
    );
    return $carProgressStatus;
  }

  static animationCallBack = (target, duration) => {
    let start;
    return function cb(timestamp) {
      if (!start) {
        start = timestamp;
      }
      const elasped = timestamp - start;
      const node = target;
      node.style.transform = `rotate(${elasped}deg)`;
      if (elasped >= duration) {
        target.remove();
      }
      if (elasped < duration) {
        requestAnimationFrame(cb);
      }
    };
  };
}
