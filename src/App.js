import Controller from './controller/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async run() {
    await this.controller.inputGameInfo();
    this.controller.playGame();
    this.controller.findWinner();
  }
}

export default App;
