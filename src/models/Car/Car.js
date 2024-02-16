import { CAR_MOVE_COUNT, MIN_MOVABLE_VALUE } from './constant.js';

class Car {
  #carDetails;

  constructor(carName) {
    this.#carDetails = {
      carName,
      moveCount: 0,
    };
  }

  move(randomMoveCount) {
    this.#updateMoveCount(randomMoveCount);

    return { ...this.#carDetails };
  }

  #updateMoveCount(randomMoveCount) {
    if (this.#isMovable(randomMoveCount)) {
      this.#carDetails.moveCount += CAR_MOVE_COUNT;
    }
  }

  #isMovable(randomMoveCount) {
    return randomMoveCount >= MIN_MOVABLE_VALUE;
  }
}

export default Car;
