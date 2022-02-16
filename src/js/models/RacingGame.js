import RacingCar from './RacingCar.js';
import isAdvance from '../utils/isAdvance.js';

class RacingGame {
  constructor() {
    this.init();
  }

  init() {
    this.state = {
      carList: [],
      round: 0,
      winner: [],
    };
  }

  carListPush(array) {
    array.forEach((carName) => {
      const newCar = new RacingCar(carName);
      this.state.carList.push(newCar);
    });
  }

  get carList() {
    return this.state.carList;
  }

  set round(number) {
    this.state.round = number;
  }

  get round() {
    return this.state.round;
  }

  winner() {
    let maxDistance = Number.MIN_SAFE_INTEGER;
    this.carList.forEach((item) => {
      console.log(item.name, item.distance);
      if (item.distance < maxDistance) {
        return false;
      }

      if (item.distance > maxDistance) {
        maxDistance = item.distance;
        this.state.winner.length = 0;
      }

      this.state.winner.push(item.name);
    });

    return this.state.winner;
  }

  play() {
    this.state.carList.forEach((car) => {
      if (isAdvance()) {
        car.go();
        return;
      }
      car.stop();
    });
  }
}

export default RacingGame;
