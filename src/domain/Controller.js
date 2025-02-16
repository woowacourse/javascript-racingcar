import InputView from "../view/InputView.js";
import Car from "../domain/Car.js";
import OutputView from "../view/OutputView.js";

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

    this.runRace(cars, tryCount);
    this.findWinner(cars);
  }

  runRace(cars, tryCount) {
    this.outputView.printResultText();
    for (let i = 0; i < tryCount; i++) {
      this.runRound(cars);
    }
  }

  findWinner(cars) {
    const max = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === max);
    this.outputView.printWinner(winners);
  }

  runRound(cars) {
    cars.forEach((car) => {
      car.move();
      this.outputView.printProgressResult(car.getName(), car.getPosition());
    });
    this.outputView.printNewLine();
  }
}
