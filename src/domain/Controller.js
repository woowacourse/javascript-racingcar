import InputView from "../view/InputView.js";
import Car from "../domain/Car.js";
import OutputView from "../view/OutputView.js";
import Race from "./Race.js";
import Winner from "./Winner.js";

export default class Controller {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async run() {
    const carNameInput = await this.inputView.readCarNames();
    const carNames = carNameInput.split(",").map((carName) => carName.trim());
    const tryCount = await this.inputView.readTryCount();

    const cars = carNames.map((carName) => new Car(carName));

    const race = new Race();
    race.runRace(cars, tryCount);

    const winner = new Winner();
    winner.findWinner(cars);
  }
}
