import { CAR_MOVE_STANDARD } from '../helpers/constants.js';
import { getRandomInteger } from '../helpers/utils.js';
import { InputView, OutputView } from '../view/index.js';
import Car from './Car.js';

export default class CarRace {
  #cars;
  #count;

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

    this.#runRace(this.#cars, this.#count);
    const winners = this.#getWinners(this.#cars);

    OutputView.printWinner(winners);
  }

  #runRace() {
    for (let currentCount = 0; currentCount < this.#count; currentCount++) {
      this.#cars.forEach(car => {
        const randomNumber = getRandomInteger(9);
        if (randomNumber >= CAR_MOVE_STANDARD) car.go();
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
