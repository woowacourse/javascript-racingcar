import RaceController from './controllers/RaceController';

class App {
  #controller;

  play() {
    this.#controller = new RaceController();

    this.#controller.startSetup().then(() => {
      this.#controller.startRace();
      this.#controller.endRace();
    });
  }
}

export default App;
