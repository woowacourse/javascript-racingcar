import { getRandomInt } from '../helpers/utils.js';
import { InputView, OutputView } from '../view/index.js';
import CarModel from './Car.js';

export default class CarRace {
  async run() {
    const names = await InputView.getNames();
    const count = await InputView.getCount();

    const cars = names.map(name => new CarModel(name));

    OutputView.printResult();

    for (let currentCount = 0; currentCount < count; currentCount++) {
      cars.forEach(car => {
        const randomNumber = getRandomInt(10);
        if (randomNumber >= 4) car.go();
      });
      OutputView.printEachGame(cars);
    }

    const winnerPosition = Math.max(...cars.map(car => car.position));

    const winners = cars
      .filter(car => car.position === winnerPosition)
      .map(car => car.name);

    OutputView.printWinner(winners);
  }
}
