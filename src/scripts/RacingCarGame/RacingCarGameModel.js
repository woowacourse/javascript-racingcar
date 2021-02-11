import {
  RANDOM_NUMBER_RANGE,
  CAR_MOVE_STANDARD_NUMBER,
} from "../constants/racing_game_constants.js";

export default class RacingCarGameModel {
  constructor() {
    this.carList = []; // [ { carName, record }, ]
  }

  registerCars(carNameList) {
    this.carList = carNameList.map((carName) => ({ carName, record: 0 }));
  }

  clearCarList() {
    this.carList = [];
  }

  moveCarForward(car, randomNumber) {
    if (randomNumber >= CAR_MOVE_STANDARD_NUMBER) {
      car.record += 1;
    }
  }

  getRandomNumber(rangeNumber) {
    return Math.floor(Math.random() * rangeNumber);
  }

  moveCarsByRandom() {
    this.carList.forEach((car) => {
      const randomNumber = this.getRandomNumber(RANDOM_NUMBER_RANGE);
      this.moveCarForward(car, randomNumber);
    });
  }

  clearCarsRecord() {
    this.carList.forEach((car) => {
      car.record = 0;
    });
  }
}
