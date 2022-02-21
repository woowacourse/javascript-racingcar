import Car from "../class/car.js";

export default class RacingCarModel {
  constructor() {
    this.carInstanceArray = [];
  }

  generateCarInstanceArray(carNameArray) {
    this.carInstanceArray = carNameArray.map((carName) => {
      return new Car(carName);
    });
  }

  updateCarForwardCount(index) {
    this.carInstanceArray[index].forwardCount++;
  }

  getGameWinners() {
    const maxCount = this.carInstanceArray
      .map((car) => car.forwardCount)
      .sort((a, b) => b - a)[0];
    return this.carInstanceArray.filter(
      (item) => item.forwardCount === maxCount
    );
  }

  getCarInstanceArray() {
    return this.carInstanceArray;
  }
}
