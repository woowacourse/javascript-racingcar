class Car {
  #name;

  #location = 0;

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    this.#name = name;
  }

  move() {
    this.#location += 1;
  }

  getName() {
    return this.#name;
  }

  getLocation() {
    return this.#location;
  }
}

export default Car;
