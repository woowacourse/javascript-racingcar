import InputView from "../view/InputView.js";
import Car from "../domain/Car.js";
import OutputView from "../view/OutputView.js";
import Race from "./Race.js";

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

    this.findWinner(cars);
  }

  findWinner(cars) {
    const max = Math.max(...cars.map((car) => car.getPosition()));
    const winners = cars.filter((car) => car.getPosition() === max);
    this.outputView.printWinner(winners);
  }
}
