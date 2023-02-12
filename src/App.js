const CarGame = require('./controller/CarGame');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  start() {
    const view = { output: OutputView, input: InputView };
    new CarGame(view).play();
  }
}

const app = new App();
app.start();
