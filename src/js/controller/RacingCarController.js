import RacingCarModel from "../models/RacingCarModel.js";
import RacingCarView from "../view/RacingCarView.js";

import { $ } from "../utils/selector.js";
import { ID } from "../utils/constants.js";

export default class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
  }

  init = () => {
    this.bindEvent();
  };

  bindEvent = () => {
    $(ID.CAR_NAME_INPUT)
      .closest("form")
      .addEventListener("submit", this.submitCarNamesHandler);
    $(ID.RACING_COUNT_INPUT)
      .closest("form")
      .addEventListener("submit", this.submitRacingCountHandler);
    $(ID.RESULT).addEventListener("click", this.clickReplayButtonHandler);
  };

  submitCarNamesHandler = (e) => {
    e.preventDefault();
    const carNames = $(ID.CAR_NAME_INPUT).value;
    try {
      this.model.setCars(carNames);
      this.view.disableCarName();
      this.view.enableRacingCount();
    } catch (err) {
      alert(err);
    }
  };

  submitRacingCountHandler = (e) => {
    e.preventDefault();
    const racingCount = $(ID.RACING_COUNT_INPUT).value;
    try {
      this.model.setRacingCount(racingCount);
      this.playGame();
      this.view.disableCarName();
      this.view.disableRacingCount();
    } catch (err) {
      alert(err);
    }
  };

  clickReplayButtonHandler = (e) => {
    if (e.target.id !== ID.REPLAY_BUTTON) {
      return;
    }
    this.model.resetGameStatus();
    this.view.resetGame();
    this.view.enableCarName();
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
