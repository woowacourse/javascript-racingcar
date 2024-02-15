import Car from "../Model/Car.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";

export default class Controller {
  #cars;

  #input = new InputView();

  #output = new OutputView();

  async run() {
    await this.#promptCarNames();
    const tryNum = await this.#promptTry();

    this.#runRace(tryNum);
    this.#output.printResultTitle();

    const calculValue = this.calculateWinners(this.cars);
    this.#output.printWinner(calculValue);
  }

  async #promptCarNames() {
    try {
      const carNames = await this.#input.readCars();
      this.#cars = carNames.map((name) => new Car(name));
    } catch (error) {
      //TODO: print Error
      await this.#promptCarNames();
    }
  }

  async #promptTry() {
    try {
      const tryNum = await this.#input.readTry();
      return tryNum;
    } catch (error) {
      //TODO print Error
      await this.#promptTry();
    }
  }

  #runRace(tryNum) {
    for (let i = 0; i < tryNum; i++) {
      this.#cars.forEach((car) => {
        car.move(this.#makeRandomNumber());
        this.#output.printCarCurrentDistance(car);
      });
      this.#output.printBlank();
    }
  }

  #makeRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  calculateWinners(cars) {
    const maxDistance = Math.max(...cars.map((car) => car.getDistance()));
    if (maxDistance) {
      const winners = cars.filter((car) =>
        car.getDistance() === maxDistance ? true : false
      );
      return { hasWinner: true, maxDistance, winners };
    }
    return { hasWinner: false, maxDistance, winners: [] };
  }
}
