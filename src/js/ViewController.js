import CarView from "./CarView.js";
import { CONSTANT, SELECTOR } from "./constants.js";
import { $, disable, enable, hide, show } from "./utils.js";

export default class ViewController {
  constructor() {
    this.carViews = [];
    this.$gameResultWinners = $(SELECTOR.GAME_RESULT.WINNERS);
    this.$gameProgressContainer = $(SELECTOR.GAME_PROGRESS.CONTAINER);
  }

  renderCarNameTag(carNames) {
    disable(SELECTOR.CAR_NAME.BUTTON);

    this.carViews = carNames.map((carName) => new CarView(carName));
    show(SELECTOR.LAP_COUNT.CONTAINER);
  }

  readyGameProgress() {
    this.carViews.forEach((carView) => carView.showSpinnerIcon());
  }

  renderGameProgress(lapResult) {
    disable(SELECTOR.LAP_COUNT.BUTTON);

    lapResult.forEach((canMove, index) => {
      if (!canMove) return;

      this.carViews[index].addForwardIcon();
    });
  }

  stopGameProgress() {
    this.carViews.forEach((carView) => carView.hideSpinnerIcon());
  }

  renderGameResult(winners) {
    const winnersName = winners.join(", ");
    this.$gameResultWinners.innerText = `🏆 최종 우승자: ${winnersName} 🏆`;
    show(SELECTOR.GAME_RESULT.CONTAINER);
  }

  clear() {
    this.carViews = [];
    this.$gameResultWinners.innerText = "";
    this.$gameProgressContainer.innerHTML = "";

    enable(SELECTOR.CAR_NAME.BUTTON);
    enable(SELECTOR.LAP_COUNT.BUTTON);
    hide(SELECTOR.LAP_COUNT.CONTAINER);
    hide(SELECTOR.GAME_RESULT.CONTAINER);
  }
}
