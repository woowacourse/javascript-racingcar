import CarView from "./CarView.js";

export default class ViewController {
  constructor() {
    this.carViews = [];
  }

  renderCarNameTag(carNames) {
    this.carViews = carNames.map((carName) => new CarView(carName));
  }

  renderGameProgress(lapResult) {
    // TODO: lapResult를 바탕으로 각 Forward Icon 출력하는 기능 만들기
  }

  show(selector) {
    document.querySelector(selector).hidden = false;
  }
}
