import { OUTPUT_MESSAGE } from './helpers/constants.js';
import { CarModel } from './models/index.js';
import { InputView, OutputView } from './views/index.js';

export default class App {
  async run() {
    const names = await InputView.getNames();
    const count = await InputView.getCount();

    const cars = names.map(name => new CarModel(name));

    OutputView.printResult();

    for (let currentCount = 0; currentCount < count; currentCount++) {
      cars.forEach(car => {
        car.moveForward();
      });
      OutputView.printEachGame(names, cars);
    }

    const winnerPosition = Math.max(...cars.map(car => car.position));

    const winners = cars
      .filter(car => car.position === winnerPosition)
      .map(car => car.name);

    OutputView.printWinner(winners);
  }
}
