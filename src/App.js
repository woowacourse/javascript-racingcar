import Controller from './controller/Controller';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async run() {
    await this.controller.inputCarNames();
  }
}

export default App;
