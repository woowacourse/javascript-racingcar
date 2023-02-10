class Car {
  #name;
  #movingLog;

  constructor(name) {
    this.#name = name;
    this.#movingLog = 0;
  }

  move() {
    this.#movingLog++;
  }

  getCarInfo() {
    return { name: this.#name, movingLog: this.#movingLog };
  }
}

module.exports = { Car };
