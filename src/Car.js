class Car {
  #name;
  #movingLog;

  constructor(name) {
    this.#name = name;
    this.#movingLog = 0;
  }

  move() {
    this.#movingLog++;
    return { name: this.#name, movingLog: this.#movingLog };
  }

  getCarInfo() {}
}

module.exports = { Car };
