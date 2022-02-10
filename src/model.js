export default class Model {
  carList;

  saveCarList(carList) {
    this.carList = carList;
  }

  startRace(count) {
    this.carList.forEach((car) => (car.step = 0));
    for (let i = 0; i < count; i++) {
      this.carList.forEach((car) => car.randomMove());
    }
  }
}
