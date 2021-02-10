import { RacingGameController } from './controller/index.js';
class App {
  constructor() {
    this.init();
  }

  init() {
    new RacingGameController();
  }
}
new App();
