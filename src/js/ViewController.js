import CarView from "./CarView.js";
import { SELECTOR } from "./constants.js";

export default class ViewController {
  constructor() {
    this.carViews = [];
    this.gameResultWinners = document.querySelector(
      SELECTOR.GAME_RESULT.WINNERS
    );
    this.gameProgressContainer = document.querySelector(
      SELECTOR.GAME_PROGRESS.CONTAINER
    );
  }

  renderCarNameTag(carNames) {
    this.disable(SELECTOR.CAR_NAME.BUTTON);

    this.carViews = carNames.map((carName) => new CarView(carName));
    this.show(SELECTOR.LAP_COUNT.CONTAINER);
  }

  renderGameProgress(lapResult, isLastLap) {
    this.hide(SELECTOR.GAME_PROGRESS.SPINNER);

    lapResult.forEach((canMove, index) => {
      if (!canMove) return;

      this.carViews[index].addForwardIcon();
    });

    if (isLastLap) return;

    setTimeout(() => {
      this.show(SELECTOR.GAME_PROGRESS.SPINNER);
    }, 200);
  }

  renderGameStart() {
    this.disable(SELECTOR.LAP_COUNT.BUTTON);

    setTimeout(() => {
      this.show(SELECTOR.GAME_PROGRESS.SPINNER);
    }, 200);
  }

  renderGameResult(winners) {
    this.gameResultWinners.innerText = `
    🏆 최종 우승자: ${winners.join(", ")} 🏆
    `;

    this.hide(SELECTOR.GAME_PROGRESS.SPINNER);
    this.show(SELECTOR.GAME_RESULT.CONTAINER);
  }

  show(selector) {
    document.querySelectorAll(selector).forEach((el) => (el.hidden = false));
  }

  hide(selector) {
    document.querySelectorAll(selector).forEach((el) => (el.hidden = true));
  }

  disable(selector) {
    document.querySelector(selector).disabled = true;
  }

  enable(selector) {
    document.querySelector(selector).disabled = false;
  }

  clear() {
    this.carViews = [];
    this.gameResultWinners.innerText = "";
    this.gameProgressContainer.innerHTML = "";

    this.enable(SELECTOR.CAR_NAME.BUTTON);
    this.enable(SELECTOR.LAP_COUNT.BUTTON);
    this.hide(SELECTOR.LAP_COUNT.CONTAINER);
    this.hide(SELECTOR.GAME_RESULT.CONTAINER);
  }
}
