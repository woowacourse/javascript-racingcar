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
    this.model.createCarList(carNameList, (carList) => {
      this.view.renderRacingResult(carList);
      this.view.renderRacingCountButton(carList);
    });
  }

  startRace(racingCount) {
    this.model.startRace(racingCount, (carList) => {
      this.view.renderRacingResult(carList);
    });

    this.model.getWinners((winners) => {
      this.view.renderResult(winners);
    });
  }

  restart() {
    this.model.restart(({ carList, winners }) => {
      this.view.renderRacingResult(carList);
      this.view.renderResult(winners);
    });
  }
}
