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
    $(`#${ID.CAR_NAME_BUTTON}`).addEventListener(
      "click",
      this.submitCarNamesHandler
    );
    $(`#${ID.RACING_COUNT_BUTTON}`).addEventListener(
      "click",
      this.submitRacingCountHandler
    );
    $(`#${ID.RESULT}`).addEventListener("click", this.clickReplayButtonHandler);
  };

  submitCarNamesHandler = (e) => {
    const carNames = $(`#${ID.CAR_NAME_INPUT}`).value;
    try {
      this.model.setCars(carNames);
      this.view.disableCarName();
      this.view.enableRacingCount();
    } catch (err) {
      alert(err);
    }
  };

  submitRacingCountHandler = (e) => {
    const racingCount = $(`#${ID.RACING_COUNT_INPUT}`).value;
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

  playGame = async () => {
    this.model.initPrevResult();
    this.view.renderCarNames(this.model.getCarsName());
    for (let i = 0; i < this.model.getRacingCount(); i++) {
      const stageInfo = await this.model.racePerSecond();
      this.view.renderResult(stageInfo);
    }
    this.endGame();
  };

  endGame = () => {
    const winners = this.model.pickWinners();
    this.view.renderWinners(winners);
    this.view.renderReplayButton();
  };
}
