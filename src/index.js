const RaceController = require('./Controller/RaceController');

class Index {
  init() {
    const raceController = new RaceController();

    raceController.start();
  }
};

const index = new Index();
index.init();
