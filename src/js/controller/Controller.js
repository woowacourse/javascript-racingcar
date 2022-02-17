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
    this.model.createCarList(carNameList, ({ carList, isRacing }) => {
      this.view.renderRacingResult(carList, isRacing);
      this.view.renderRacingCountButton(carList);
    });
  }

  startRace(racingCount) {
    this.model
      .startRace(racingCount, ({ carList, isRacing }) => {
        this.view.renderRacingResult(carList, isRacing);
      })
      .then(({ winners }) => {
        this.view.renderResult(winners);
      });
  }

  restart() {
    this.model.restart(({ carList, winners, isRacing }) => {
      this.view.renderRacingCountButton(carList);
      this.view.renderRacingResult(carList, isRacing);
      this.view.renderResult(winners);
    });
  }
}
