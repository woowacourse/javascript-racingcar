import CarView from "./CarView.js";

export default class ViewController {
  constructor() {
    this.carViews = [];
  }

  renderCarNameTag(cars) {
    this.carViews = cars.map(({ name }) => new CarView(name));
  }

  show(selector) {
    document.querySelector(selector).hidden = false;
  }
}
