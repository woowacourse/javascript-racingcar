import Controller from "./domain/Controller.js";

class App {
  async run() {
    const controller = new Controller();

    await controller.play();
  }
}

export default App;
