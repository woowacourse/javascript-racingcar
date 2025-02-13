import Controller from "./controller/Controller.js";

class App {
  run() {
    const controller = new Controller();
    controller.run();
  }
}

const app = new App();
app.run();
