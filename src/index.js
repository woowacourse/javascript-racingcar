import RacingGameController from './controller/racingGameController';
import { InputView, OutputView } from './view';

class App {
  async run() {
    const racingGameController = new RacingGameController(
      { inputView: InputView, outputView: OutputView }, //
    );
    await racingGameController.run();
  }
}

const app = new App();
app.run();
