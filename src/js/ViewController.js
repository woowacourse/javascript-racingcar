import CarView from "./CarView.js";
import { SELECTOR } from "./constants.js";

export default class ViewController {
  constructor() {
    this.carViews = [];
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
    const winnersTag = document.querySelector(
      `${SELECTOR.GAME_RESULT.CONTAINER} > h2`
    );

    winnersTag.innerText = `🏆 최종 우승자: ${winners.join(", ")} 🏆`;
    this.show(SELECTOR.GAME_RESULT.CONTAINER);
  }

  show(selector) {
    document.querySelector(selector).hidden = false;
  }
}
