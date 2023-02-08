const Console = require('./UI/Console');
const Car = require('./Car');

class RacingGame {
  constructor() {}

  setCarList(carNames) {
    this.carList = carNames.map((carName) => new Car(carName));
  }
}

module.exports = RacingGame;
