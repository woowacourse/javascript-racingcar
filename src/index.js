const CarRaceController = require('./Controller/CarRaceController');

class Index {
  init() {
    const carRaceController = new CarRaceController();

    carRaceController.start();
  }
}

const index = new Index();
index.init();
