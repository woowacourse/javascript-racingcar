import Car from './Model/Car.js';
import outputView from './View/output.js';
import { getCarsName, getGameCount } from './View/input.js';

class App {
  async run() {
    const carNames = await getCarsName();
    const cars = carNames.split(',').map((carName) => new Car(carName));
    const gameCount = Number(await getGameCount());

    outputView.printGameResult(gameCount, cars);

    outputView.printWinners(cars);
  }
}

export default App;
