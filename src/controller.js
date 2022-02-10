import View from './view.js';
import Model from './model.js';

class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.triggerEvent();
  }

  triggerEvent() {
    this.view.setOnSubmitName(this.onSubmitName.bind(this));
    this.view.setOnSubmitCount(this.onSubmitCount.bind(this));
  }

  onSubmitName(carNames) {}

  onSubmitCount(count) {}
}
