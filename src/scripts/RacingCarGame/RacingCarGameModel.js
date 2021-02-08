import { CAR_MOVE_DECIDE_NUMBER_RANGE, CAR_MOVE_STANDARD_NUMBER } from '../constants.js';

export default class RacingCarGameModel {
  constructor() {
    this.carList = [];
  }

  registerCars(carNameList) {
    this.carList = carNameList.map(carName => ({ carName, record: 0 }));
  }

  moveCarsForward() {
    this.carList.forEach(car => {
      const randomNumber = Math.floor(Math.random() * CAR_MOVE_DECIDE_NUMBER_RANGE);
      if (randomNumber >= CAR_MOVE_STANDARD_NUMBER) {
        car.record += 1;
      }
    })
  }

  clearCarsRecord() {
    this.carList.forEach(car => {
      car.record = 0;
    })
  }

}