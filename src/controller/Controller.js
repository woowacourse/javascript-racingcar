import { InputView } from '../view/InputView';
import { OutputView } from '../view/OutputView';

class Controller {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async inputCarNames() {
    const namesInput = await this.#inputView.readCarNames();
  }
}

export default Controller;
