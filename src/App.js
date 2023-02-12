const RacingGameController = require('./controller/RacingGameController');
const RacingGameService = require('./service/RacingGameService');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  start() {
    const view = { input: InputView, output: OutputView };
    new RacingGameController(new RacingGameService(), view).playGame();
  }
}

new App().start();
