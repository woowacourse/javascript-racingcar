import RacingGameController from './controllers/RacingGameController.js';

class App {
  constructor() {
    new RacingGameController();
  }
}

document.addEventListener('DOMContentLoaded', () => new App());
