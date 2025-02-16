import { getRandomInt } from '../utils.js';

class Race {
  constructor(cars) {
    this.cars = cars;
  }

  playOneRound() {
    this.cars.forEach(car => {
      const randomNumber = getRandomInt(10);
      car.go(randomNumber);
    });
    return structuredClone(this.cars);
  }

  playAllRounds(count) {
    const results = [];
    for (let i = 0; i < count; i += 1) {
      results.push(this.playOneRound());
    }
    return results;
  }
}

export default Race;
