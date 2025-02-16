import { getRandomInteger } from '../lib/utils.js';
import { InputView, OutputView } from '../view/index.js';
import Car from './Car.js';

export default class CarRace {
  #cars;
  #tryCount;

  static #CAR_MOVE_STANDARD = 4;

  async init() {
    const names = await InputView.getCarNames();
    this.#cars = this.#makeCars(names);

    this.#tryCount = await InputView.getTryCount();
  }

  #makeCars(names) {
    return names.map(name => new Car(name));
  }

  async run() {
    OutputView.printResultOutput();

    this.#runRace();
    const winners = this.#getWinners();

    OutputView.printWinner(winners);
  }

  #runRace() {
    for (let round = 0; round < this.#tryCount; round++) {
      this.#cars.forEach(car => {
        if (this.#checkCarGo()) car.go();
      });

      OutputView.printEachGame(this.#cars);
    }
  }

  #checkCarGo() {
    return getRandomInteger(9) >= CarRace.#CAR_MOVE_STANDARD;
  }

  #getWinners() {
    const winnerPosition = Math.max(...this.#cars.map(car => car.position));
    return this.#cars
      .filter(car => car.position === winnerPosition)
      .map(car => car.name);
  }
}
