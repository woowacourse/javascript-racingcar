import Controller from "./controller/Controller.js";

class App {
  async run() {
    const controller = new Controller();

    await controller.play();
  }
}

export default App;
