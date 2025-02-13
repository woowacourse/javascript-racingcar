import getRandomValue from './utils/getRandomValue.js';
import { GAME_MESSAGE, SEPERATOR } from './constants/systemMessages.js';

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
      .join(`${SEPERATOR} `);
  }

  start() {
    console.log(GAME_MESSAGE.RACING_RESULT);
    for (let i = 0; i < this.count; i++) {
      this.carList.forEach((car) => {
        car.move(getRandomValue());
        console.log(car.getRacingStatus());
      });
      console.log();
    }
    console.log(`${GAME_MESSAGE.WINNER} ${this.getWinner()}`);
  }
}

export default Racing;
