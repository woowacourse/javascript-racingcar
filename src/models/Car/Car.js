class Car {
  static #MIN_MOVABLE_VALUE = 4;

  static #CAR_MOVE_COUNT = 1;

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
      this.#carDetails.moveCount += Car.#CAR_MOVE_COUNT;
    }
  }

  #isMovable(randomMoveCount) {
    return randomMoveCount >= Car.#MIN_MOVABLE_VALUE;
  }
}

export default Car;
