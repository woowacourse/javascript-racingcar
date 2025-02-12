import CarManager from './CarManager.js';

class App {
  run() {
    const carManager = new CarManager();
    carManager.createCars('pobi, woni, jun');
    carManager.race(3);
  }
}

export default App;
