import RacingGameController from './controller/RacingGameController';

class App {
  async run() {
    const racingGameController = new RacingGameController();
    await racingGameController.run();
  }
}

const app = new App();
app.run();
