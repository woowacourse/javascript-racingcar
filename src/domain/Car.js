class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  move() {
    this.#position += 1;
  }

  judgeMove(isForward) {
    if (isForward) {
      this.move();
    }
  }
}

export default Car;
