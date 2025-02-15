import Car from './Car.js';

class Race {
  cars;
  tryCount;

  constructor(carNames, tryCount) {
    this.cars = carNames.map((car) => new Car(car));
    this.tryCount = tryCount;
  }
}

export default Race;
