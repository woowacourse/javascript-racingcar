const { Settings } = require('./Config');

class Car {
  constructor(carName) {
    this.name = carName;
    this.position = 1;
  }

  static generateRandomNumber() {
    return (
      Math.floor(
        Math.random() * (Settings.MAX_RANDOM_VALUE - Settings.MIN_RANDOM_VALUE)
      ) + Settings.MIN_RANDOM_VALUE
    );
  }

  move() {
    if (Car.generateRandomNumber() >= Settings.MOVING_NUMBER) {
      this.position += 1;
    }
  }
}

module.exports = Car;
