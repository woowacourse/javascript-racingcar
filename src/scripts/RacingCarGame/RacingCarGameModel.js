import {
  CAR_MOVE_THRESHOLD_RANGE_NUMBER,
  CAR_MOVE_THRESHOLD_NUMBER,
} from '../constants.js';

export default class RacingCarGameModel {
  constructor() {
    this.carList = [];
  }

  registerCars(carNameList) {
    this.carList = carNameList.map((carName) => ({ carName, record: 0 }));
  }

  clearCarList() {
    this.carList = [];
  }

  moveCarForward(car, randomNumber) {
    if (randomNumber >= CAR_MOVE_THRESHOLD_NUMBER) {
      car.record += 1;
    }
  }

  getRandomNumber(rangeNumber) {
    return Math.floor(Math.random() * rangeNumber);
  }

  moveCarsByRandom() {
    this.carList.forEach((car) => {
      const randomNumber = this.getRandomNumber(
        CAR_MOVE_THRESHOLD_RANGE_NUMBER
      );
      this.moveCarForward(car, randomNumber);
    });
  }

  clearCarsRecord() {
    this.carList.forEach((car) => {
      car.record = 0;
    });
  }
}
