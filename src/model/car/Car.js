class Car {
  #name;

  #location = 0;

  constructor(name) {
    if (name) {
      this.setName(name);
    }
  }

  setName(name) {
    this.#name = name;
  }

  move(canMove = true) {
    if (canMove) {
      this.#location += 1;
    }
  }

  getName() {
    return this.#name;
  }

  getLocation() {
    return this.#location;
  }
}

export default Car;
