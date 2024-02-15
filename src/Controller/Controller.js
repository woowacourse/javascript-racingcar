import Car from "../Model/Car.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";

export default class Controller {
  #cars;

  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    const carNames = await inputView.readCars();
    this.#cars = carNames.map((name) => new Car(name));

    const tryNum = await inputView.readTry();

    for (let i = 0; i < tryNum; i++) {
      this.#cars.forEach((car) => {
        car.move(this.makeRandomNumber());
        outputView.printCarCurrentDistance(car);
      });
      outputView.printBlank();
    }
    outputView.printResultTitle();
    outputView.printWinner(this.#cars);
  }

  makeRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
