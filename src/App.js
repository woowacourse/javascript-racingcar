import RaceController from './controller/RaceController';

class App {
  #raceController;

  constructor() {
    this.#raceController = new RaceController();
  }

  async run() {
    await this.#raceController.run();
  }
}

export default App;
