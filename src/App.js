const RacingGame = require('./RacingGame');
const InputView = require('./UI/InputView');

class App {
  play() {
    const racingGame = new RacingGame();
    InputView.getCarNames(racingGame);
  }
}

module.exports = App;
