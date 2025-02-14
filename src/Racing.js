import getRandomValue from './utils/getRandomValue.js';
import { GAME_MESSAGE, SEPARATOR } from './constants/systemMessages.js';
import printMessage from './utils/printMessage.js';

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
    printMessage(GAME_MESSAGE.RACING_RESULT);
    for (let i = 0; i < this.count; i++) {
      this.raceOnce();
      printMessage();
    }
    printMessage(`${GAME_MESSAGE.WINNER} ${this.getWinner()}`);
  }

  raceOnce() {
    this.carList.forEach((car) => {
      car.move(getRandomValue());
      printMessage(car.getRacingStatus());
    });
  }
}

export default Racing;
