import CarRacingController from './controllers/CarRacingController.js';
import CarRacingModel from './models/CarRacingModel.js';
import CarRacingView from './views/CarRacingView.js';

class RacingCarApp {
  constructor() {
    this.model = new CarRacingModel();
    this.view = new CarRacingView(this.model);
    this.controller = new CarRacingController(this.model, this.view);
  }
}

new RacingCarApp();
