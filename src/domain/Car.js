import { MOVE_SETTING } from '../util/Constant.js';

class Car {
  #name;
  #position = [];

  constructor(carName) {
    this.#name = carName;
  }

  move(randomNumbers) {
    randomNumbers.forEach((number) => {
      this.#position.push(
        number >= MOVE_SETTING.advanceBoundary
          ? MOVE_SETTING.advance
          : MOVE_SETTING.stop
      );
    });
  }

  getStatus() {
    return { name: this.#name, position: this.#position };
  }

  getFinalPosition() {
    return this.#position.reduce((acc, cur) => acc + cur, 0);
  }

  getWinnerName(highestPosition) {
    if (this.isWinner(highestPosition)) return this.#name;
  }

  isWinner(highestPosition) {
    return highestPosition === this.getFinalPosition();
  }
}

export default Car;
