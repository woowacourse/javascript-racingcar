import { RacingCarInstance } from './index.js';
import isAdvance from '../utils/isAdvance.js';
export default class RacingGame {
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
      const newCar = new RacingCarInstance(carName);
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
    let maxDistance = Number.MIN_SAFE_INTEGER;
    this.carList.forEach((item) => {
      if (item.distance < maxDistance) {
        return false;
      }

      if (item.distance > maxDistance) {
        maxDistance = item.distance;
        this.state.winner.length = 0;
      }

      this.state.winner.push(item);
    });

    return this.state.winner;
  }

  play() {
    const { carList } = this.state;
    // 일단 클래스 자체에도 예외 검증 부분 구현 유/무 판단 필.
    console.log(carList, carList.length);
    if (carList.length === 0) {
      throw new Error('참여 자동차가 0대로 설정되어있습니다.');
    }

    carList.forEach((car) => {
      if (isAdvance() === true) {
        return true;
      }

      car.go();
    });

    return this.state.carList;
  }
}
