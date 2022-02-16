export default class Model {
  carList = [];

  saveCarList(carList) {
    this.carList = carList;
  }

  startRace(count) {
    this.resetAllCarStep();
    for (let i = 0; i < count; i++) {
      this.carList.forEach((car) => car.randomMove(i));
    }
  }

  resetAllCarStep() {
    this.carList.forEach((car) => car.resetStep());
  }

  resetCarList() {
    this.carList = [];
  }
}
