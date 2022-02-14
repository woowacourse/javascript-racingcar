import RacingGameController from './RacingGameController.js';

class App {
  constructor() {
    this._RacingGame = new RacingGameController();
  }
}

document.addEventListener('DOMContentLoaded', () => new App());
