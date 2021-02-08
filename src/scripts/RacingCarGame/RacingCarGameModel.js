export default class RacingCarGameModel {
  constructor() {
    this.carList = [];
  }

  registerCars(carNameList) {
    this.carList = carNameList.map(carName => ({ carName, record: 0 }));
  }
}