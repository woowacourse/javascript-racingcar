import RacingCarModel from "../models/RacingCarModel.js";
import RacingCarView from "../view/RacingCarView.js";

export default class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
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
    document
      .querySelector("#result")
      .addEventListener("click", this.clickReplayButtonHandler);
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

  clickReplayButtonHandler = (e) => {
    if (e.target.id !== "replay-button") {
      return;
    }
    this.model.resetGameStatus();
    this.view.resetGame();
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
    this.view.renderReplayButton();
  };
}
