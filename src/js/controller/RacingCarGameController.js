import Controller from '../core/Controller.js';
import View from '../core/View.js';

export default class RacingCarGameController extends Controller {
  init() {
    this.model.init().then((response) => {
      this.notify(response);
      this.bindEventListners();
    });
  }

  notify(response) {
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
      this.notify(response);
    });
  }

  startRace(racingCount) {
    this.model
      .startRace(racingCount, (response) => {
        this.notify(response);
      })
      .then((response) => {
        this.notify(response);
        this.view.celebrate();
      });
  }

  restart() {
    this.model.init().then((response) => {
      this.notify(response);
    });
  }
}
