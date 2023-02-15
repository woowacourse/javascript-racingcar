const RacingGame = require('./controller/RacingGame');
const InputView = require('./view/InputView');

class App {
  play() {
    const racingGame = new RacingGame();
    InputView.getCarNames(racingGame);
  }
}

module.exports = App;
