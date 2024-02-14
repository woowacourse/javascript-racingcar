import InputView from '../view/InputView.js';

class GameController {
  constructor() {
    this.input = new InputView();
  }

  startGame() {
    const carNamesArr = this.getCarNames();
  }

  getCarNames() {
    const carNames = this.input.inputCarName();

    return carNames.split(',');
  }
}

export default GameController;
ft;
