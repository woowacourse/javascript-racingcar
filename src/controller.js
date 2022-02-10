import View from './view.js';
import Model from './model.js';

class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
  }
}
