export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
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
    this.model.createCarList(carNameList).then((response) => {
      this.view.render(response);
    });
  }

  startRace(racingCount) {
    this.model
      .startRace(racingCount, (response) => {
        this.view.render(response);
      })
      .then((response) => {
        this.view.render(response);
      });
  }

  restart() {
    this.model.restart().then((response) => {
      this.view.render(response);
    });
  }
}
