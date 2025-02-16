import { getRandomInteger } from '../lib/utils.js';
import { InputView, OutputView } from '../view/index.js';
import Car from './Car.js';

export default class CarRace {
  #cars;
  #count;

  static #CAR_MOVE_STANDARD = 4;

  async init() {
    const names = await InputView.getNames();
    this.#cars = this.#makeCars(names);

    this.#count = await InputView.getCount();
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
    for (let round = 0; round < this.#count; round++) {
      this.#cars.forEach(car => {
        const randomNumber = getRandomInteger(9);
        if (randomNumber >= CarRace.#CAR_MOVE_STANDARD) car.go();
      });

      OutputView.printEachGame(this.#cars);
    }
  }

  #getWinners() {
    const winnerPosition = Math.max(...this.#cars.map(car => car.position));
    return this.#cars
      .filter(car => car.position === winnerPosition)
      .map(car => car.name);
  }
}
