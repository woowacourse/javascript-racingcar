import InputView from './ui/InputView.js';
import OutputView from './ui/OutputView.js';
import Validate from './utils/Validate.js';
import RacingcarManager from './domain/RacingcarManager.js'

class App {
  #inputView
  #outputView
  #validate
  #manager;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#validate = new Validate();
    this.#manager = new RacingcarManager();
  }

  async run() {
    const carNames = await this.#getCarNames();
    const attempts = await this.#getAttempts();

    const cars = this.#manager.createCars(carNames);
    this.#outputView.printResultMessage();

    for(let i = 0; i < attempts; i++) {
      this.#manager.oneRound(cars);
      this.#outputView.printOneRoundResult(cars);
    }

    const winners = this.#manager.getWinners(cars);
    this.#outputView.printWinners(winners);
  }

  async #getCarNames() {
    while (true) {
      try {
        const carNamesInput = await this.#inputView.readCarNames();
        this.#validateCarNames(carNamesInput);
        return carNamesInput.split(',');
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }
  
  #validateCarNames(carNamesInput) {
    this.#validate.isEmpty(carNamesInput);
    this.#validate.isValidCarNames(carNamesInput);
  }

  async #getAttempts()  {
    while(true) {
        try {
            const attempts = await this.#inputView.readAttempts();
            this.#validateAttempts(attempts);
            return Number(attempts);
        } catch (error) {
            this.#outputView.printErrorMessage(error.message);
        }
    }
  }

  #validateAttempts(attempts) {
    try {
        this.#validate.isEmpty(attempts);
        const numAttempts = Number(attempts);
        this.#validate.isNumber(numAttempts);
        this.#validate.isPositiveNumber(numAttempts);
        this.#validate.isInteger(numAttempts);
    } catch (error) {
        throw error;
    }
  }

}

export default App;
