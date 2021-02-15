import CarView from "./CarView.js";
import { CLASSNAME, SELECTOR } from "./constants.js";
import { $ } from "./utils.js";

export default class ViewController {
  constructor() {
    this.carViews = [];
    this.$gameResultWinners = $(SELECTOR.GAME_RESULT.WINNERS);
    this.$gameProgressContainer = $(SELECTOR.GAME_PROGRESS.CONTAINER);
  }

  renderCarNameTag(carNames) {
    this.disable(SELECTOR.CAR_NAME.BUTTON);

    this.carViews = carNames.map((carName) => new CarView(carName));
    this.show(SELECTOR.LAP_COUNT.CONTAINER);
  }

  renderGameProgress(lapResult) {
    this.disable(SELECTOR.LAP_COUNT.BUTTON);

    lapResult.forEach((canMove, index) => {
      if (!canMove) return;

      this.carViews[index].addForwardIcon();
    });
  }

  renderGameResult(winners) {
    this.$gameResultWinners.innerText = `🏆 최종 우승자: ${winners.join(
      ", "
    )} 🏆`;
    this.show(SELECTOR.GAME_RESULT.CONTAINER);
  }

  show(selector) {
    $(selector).classList.remove(CLASSNAME.MODIFIER.HIDDEN);
  }

  hide(selector) {
    $(selector).classList.add(CLASSNAME.MODIFIER.HIDDEN);
  }

  disable(selector) {
    $(selector).disabled = true;
  }

  enable(selector) {
    $(selector).disabled = false;
  }

  clear() {
    this.carViews = [];
    this.$gameResultWinners.innerText = "";
    this.$gameProgressContainer.innerHTML = "";

    this.enable(SELECTOR.CAR_NAME.BUTTON);
    this.enable(SELECTOR.LAP_COUNT.BUTTON);
    this.hide(SELECTOR.LAP_COUNT.CONTAINER);
    this.hide(SELECTOR.GAME_RESULT.CONTAINER);
  }
}
