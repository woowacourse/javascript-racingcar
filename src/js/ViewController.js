import CarView from "./CarView.js";

export default class ViewController {
  constructor() {
    this.carViews = [];
  }

  renderCarNameTag(carNames) {
    this.carViews = carNames.map((carName) => new CarView(carName));
  }

  renderGameProgress(lapResult) {
    lapResult.forEach((canMove, index) => {
      if (!canMove) return;

      this.carViews[index].addForwardIcon();
    });
  }
  }

  show(selector) {
    document.querySelector(selector).hidden = false;
  }
}
