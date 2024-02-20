import Car from './Car';

class CarMover {
  #moveFunction;
  #moveDistance;

  constructor(moveFunction, moveDistance) {
    this.#moveFunction = moveFunction;
    this.#moveDistance = moveDistance;
  }

  giveManyTry(car, maxTryCount) {
    this.#validateTryCount(maxTryCount);
    Array({ length: maxTryCount }).forEach(() => this.#giveOneTry(car));
  }

  #giveOneTry(car) {
    if (!(car instanceof Car)) throw new Error('[ERROR] Car가 아님');
    const canGo = this.#moveFunction();
    car.grantTry(canGo ? this.#moveDistance : 0);
  }

  #validateTryCount(tryCount) {
    if (this.#isValidTryCount(tryCount))
      throw new Error('[ERROR] tryCount가 정수가 아님');
  }

  #isValidTryCount(tryCount) {
    return !Number.isInteger(tryCount) || tryCount < 0;
  }
}

export default CarMover;
