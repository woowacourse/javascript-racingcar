import getRandomValueInRange from './utils/getRandomValueInRange.js';
import { GAME_MESSAGE, SEPARATOR } from './constants/systemMessages.js';
import Printer from './utils/printMessage.js';

class Racing {
  carList;
  count;

  constructor(carList, count) {
    this.carList = carList;
    this.count = count;
  }

  getWinner() {
    const maxPosition = Math.max(...this.carList.map((car) => car.position));
    return this.carList
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name)
      .join(`${SEPARATOR} `);
  }

  start() {
    Printer.printMessage(GAME_MESSAGE.RACING_RESULT);
    for (let i = 0; i < this.count; i++) {
      this.raceOnce();
      Printer.printBlank();
    }
    Printer.printMessage(`${GAME_MESSAGE.WINNER} ${this.getWinner()}`);
  }

  raceOnce() {
    this.carList.forEach((car) => {
      car.move(getRandomValueInRange(0, 9));
      Printer.printMessage(car.getRacingStatus());
    });
  }
}

export default Racing;
