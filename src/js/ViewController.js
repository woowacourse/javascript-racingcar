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
    this.carViews = carNames.map((carName) => new CarView(carName));
    this.show(SELECTOR.LAP_COUNT.CONTAINER);
  }

  renderGameProgress(lapResult) {
    lapResult.forEach((canMove, index) => {
      if (!canMove) return;

      this.carViews[index].addForwardIcon();
    });
  }

  renderGameResult(winners) {
    this.gameResultWinners.innerText = `🏆 최종 우승자: ${winners.join(
      ", "
    )} 🏆`;
    this.show(SELECTOR.GAME_RESULT.CONTAINER);
  }

  show(selector) {
    document.querySelector(selector).hidden = false;
  }

  hide(selector) {
    document.querySelector(selector).hidden = true;
  }

  clear() {
    this.carViews = [];
    this.gameResultWinners.innerText = "";
    this.gameProgressContainer.innerHTML = "";

    this.hide(SELECTOR.LAP_COUNT.CONTAINER);
    this.hide(SELECTOR.GAME_RESULT.CONTAINER);
  }
}
