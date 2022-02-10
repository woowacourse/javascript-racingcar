import View from './view.js';
import Model from './model.js';
import Car from './car.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.triggerEvent();
  }

  triggerEvent() {
    this.view.setOnSubmitName(this.onSubmitName.bind(this));
    this.view.setOnSubmitCount(this.onSubmitCount.bind(this));
  }

  onSubmitName(carNames) {
    const carNamesArray = carNames.split(',');
    this.model.saveCarList(this.makeCars(carNamesArray));
  }

  makeCars(carNamesArray) {
    const carList = carNamesArray.map((carName) => new Car(carName));
    return carList;
  }

  onSubmitCount(count) {
    // 시도할 횟수를 받아서, 랜덤 전진 시키기
    this.model.startRace(count);
    // 전진 된 만큼 뷰 업데이트
    this.view.resultUpdate(this.model.carList);
    // 우승자 보여주기
    this.view.winnerUpdate(this.makeWinner(this.model.carList));
  }

  makeWinner(carList) {
    const steps = carList.map((car) => car.step);
    const maxStep = Math.max(...steps);
    const winnerCarList = carList.filter((car) => car.step === maxStep);
    return winnerCarList.map((car) => car.name);
  }
}
