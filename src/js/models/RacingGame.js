import RacingCar from './RacingCar.js';
import NUMBERS from '../constants/number.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

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

  generateCar(array) {
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

  get winner() {
    return this.state.winner;
  }

  setWinner() {
    let maxDistance = Number.MIN_SAFE_INTEGER;
    this.carList.forEach((item) => {
      if (item.distance < maxDistance) {
        return false;
      }

      if (item.distance > maxDistance) {
        maxDistance = item.distance;
        this.state.winner.length = 0;
      }

      this.state.winner.push(item.name);
    });
  }

  runRound() {
    this.state.carList.forEach((car) => {
      if (this.isAdvance()) {
        car.go();
        return;
      }
      car.stop();
    });
  }

  isAdvance() {
    return (
      generateRandomNumber(NUMBERS.ENTIRE_NUMBER) >= NUMBERS.MOVABLE_NUMBER
    );
  }
}

export default RacingGame;
