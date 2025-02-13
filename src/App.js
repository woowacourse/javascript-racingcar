import { CarController } from './Controllers/CarController.js';

class App {
  async run() {
    const carController = new CarController();
    carController.run();
  }
}

export default App;
