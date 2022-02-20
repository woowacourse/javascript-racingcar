import Controller from '../core/Controller.js';
import View from '../core/View.js';

export default class RacingCarGameController extends Controller {
  init() {
    this.model.init().then((response) => {
      this.updateView(response);
      this.bindEventListners();
    });
  }

  updateView(response) {
    View.update(() => {
      this.view.render(response);
      this.view.cacheDOMElements();
    });
  }

  bindEventListners() {
    this.view.bindSubmitCarNames(this.createCarList.bind(this));
    this.view.bindSubmitRacingCount(this.startRace.bind(this));
    this.view.bindClickRestartButton(this.restart.bind(this));
  }

  createCarList(carNameList) {
    this.model.createCarList(carNameList).then((response) => {
      this.updateView(response);
    });
  }

  startRace(racingCount) {
    this.model
      .startRace(racingCount, (response) => {
        this.updateView(response);
      })
      .then((response) => {
        this.updateView(response);
        this.view.celebrate();
      });
  }

  restart() {
    this.model.init().then((response) => {
      this.updateView(response);
    });
  }
}
