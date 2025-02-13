import Controller from './controller/Controller.js';

class App {
  run() {
    const controller = new Controller();
    controller.process();
  }
}

export default App;
