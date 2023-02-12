import RacingGameController from './domain/RacingGameController.js';

export default class App {
  #racingGameController;

  constructor() {
    this.#racingGameController = new RacingGameController();
  }

  async start() {
    await this.#racingGameController.setupGame();
    this.#racingGameController.playGame();
  }
}
