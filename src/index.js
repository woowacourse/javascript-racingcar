import RacingGameController from './Controller/RacingGameController';

class App {
  async run() {
    const racingGameController = new RacingGameController();
    racingGameController.run();
  }
}

const app = new App();
app.run();
