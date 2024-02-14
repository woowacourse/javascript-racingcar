import InputView from '../views/InputView.js';

class MainController {
  async run() {
    await InputView.readCarNames();
  }
}

export default MainController;
