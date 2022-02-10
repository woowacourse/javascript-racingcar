import RacingCarModel from "../models/RacingCarModel.js";
import ResultView from "../view/ResultView.js";

export default class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new ResultView();
  }

  init = () => {
    this.bindEvent();
  };

  bindEvent = () => {
    document
      .querySelector("#car-names-input")
      .closest("form")
      .addEventListener("submit", this.submitCarNamesHandler);
    document
      .querySelector("#racing-count-input")
      .closest("form")
      .addEventListener("submit", this.submitRacingCountHandler);
  };

  submitCarNamesHandler = (e) => {
    e.preventDefault();
    const carNames = document.querySelector("#car-names-input").value;
    try {
      this.model.setCars(carNames);
    } catch (err) {
      alert(err);
    }
  };

  submitRacingCountHandler = (e) => {
    e.preventDefault();
    const racingCount = document.querySelector("#racing-count-input").value;
    this.model.setRacingCount(racingCount);
    this.playGame();
  };

  playGame = () => {
    for (let i = 0; i < this.model.getRacingCount(); i += 1) {
      const raceResult = this.model.playTurn();
      this.view.setResult(raceResult);
      this.view.renderResult();
    }
    this.endGame();
  };

  endGame = () => {
    const winners = this.model.pickWinners();
    this.view.renderWinners(winners);
  };
}
