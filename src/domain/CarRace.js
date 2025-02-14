import { CAR_MOVE_STANDARD } from '../helpers/constants.js';
import { getRandomInteger } from '../helpers/utils.js';
import { InputView, OutputView } from '../view/index.js';
import Car from './Car.js';

export default class CarRace {
  async run() {
    const names = await InputView.getNames();
    const count = await InputView.getCount();

    const cars = names.map(name => new Car(name));

    OutputView.printResultOutput();

    for (let currentCount = 0; currentCount < count; currentCount++) {
      cars.forEach(car => {
        const randomNumber = getRandomInteger(9);
        if (randomNumber >= CAR_MOVE_STANDARD) car.go();
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
