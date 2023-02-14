const CarRaceController = require("./controller/CarRaceController");
class App {
  #carRaceController = new CarRaceController();

  play() {
    this.#carRaceController.start();
  }
}

module.exports = App;
