class Car {
  #name;
  #movingLog;

  constructor(name) {
    this.#name = name;
    this.#movingLog = 0;
  }

  move() {
    console.log(this.#name);
  }

  getCarInfo() {}
}

module.exports = { Car };
