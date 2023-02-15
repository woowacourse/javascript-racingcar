const { Settings } = require('../constants/Config');

class Car {
  constructor(carName) {
    this.name = carName;
    this.position = 1;
  }

  move(number) {
    if (number >= Settings.MOVING_NUMBER) {
      this.position += 1;
    }
  }
}

module.exports = Car;
