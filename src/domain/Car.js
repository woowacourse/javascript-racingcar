class Car {
  #name;
  #moveCnt;

  constructor(name) {
    this.#name = name;
    this.#moveCnt = 0;
  }

  move() {
    this.#moveCnt++;
  }

  getCarInfo() {
    return { name: this.#name, moveCnt: this.#moveCnt };
  }
}

module.exports = { Car };
