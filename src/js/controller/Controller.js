import Car from '../Car.js';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.carList = [];
    this.winners = [];
  }

  init() {
    this.bindEventListners();
  }

  bindEventListners() {
    this.view.bindSubmitCarNames(this.createCarList.bind(this));
    this.view.bindSubmitRacingCount(this.startRace.bind(this));
    this.view.bindClickRestartButton(this.restart.bind(this));
  }

  createCarList(carNameList) {
    this.carList = carNameList.map((name) => new Car(name));

    this.view.renderRacingResult(this.carList);
  }

  startRace(racingCount) {
    for (let i = 0; i < racingCount; i += 1) {
      this.carList.forEach((car) => car.race());
      this.view.renderRacingResult(this.carList);
    }

    this.getWinners();
    this.view.renderResult(this.winners);
  }

  getWinners() {
    const maxDistance = Math.max(...this.carList.map((car) => car.distance));
    this.winners = this.carList
      .filter((car) => car.distance === maxDistance)
      .map((winner) => winner.name);
  }

  restart() {
    this.carList = [];
    this.winners = [];

    this.view.renderRacingResult(this.carList);
    this.view.renderResult(this.winners);
  }
}
