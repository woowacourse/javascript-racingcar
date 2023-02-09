import RaceController from './controllers/RaceController';

class App {
  #controller;

  async play() {
    this.#controller = new RaceController();

    await this.#controller.startSetup();
    this.#controller.startRace();
    this.#controller.endRace();
  }
}

export default App;
