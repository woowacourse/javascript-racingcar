const { Settings } = require('./Config');

class Car {
  constructor(carName) {
    this.name = carName;
    this.position = 1;
  }

  move(power) {
    if (power >= Settings.MOVING_POWER) {
      this.position += 1;
    }
  }
}

module.exports = Car;
