import Controller from './controller/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async run() {
    await this.controller.inputCarNames();
    await this.controller.inputTryCount();
    this.controller.playGame();
  }
}

export default App;
