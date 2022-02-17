import RacingCarModel from '../models/RacingCarModel.js';
import CarNamesInputView from '../view/CarNamesInputView.js';
import CountInputView from '../view/CountInputView.js';
import ResultView from '../view/ResultView.js';
import WinnerView from '../view/WinnerView.js';

import { $ } from '../utils/selector.js';

export default class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.CarNamesInputView = new CarNamesInputView($(`#car-names-section`))
      .setup()
      .on('@submitCarNames', (e) => this.submitCarNamesHandler(e.detail));
    this.CountInputView = new CountInputView($(`#racing-count-section`))
      .setup()
      .on('@submitRacingCount', (e) => this.submitRacingCountHandler(e.detail));
    this.ResultView = new ResultView($(`#result`));
    this.WinnerView = new WinnerView($(`#result`))
      .setup()
      .on('@clickReplayButton', this.clickReplayButtonHandler);
  }

  submitCarNamesHandler = (carNames) => {
    try {
      this.model.setCars(carNames);
      this.CarNamesInputView.disableCarNamesInput();
      this.CountInputView.enableCountInput();
    } catch (err) {
      alert(err);
    }
  };

  submitRacingCountHandler = (racingCount) => {
    try {
      this.model.setRacingCount(racingCount);
      this.playGame();
      this.CarNamesInputView.disableCarNamesInput();
      this.CountInputView.disableCountInput();
    } catch (err) {
      alert(err);
    }
  };

  playGame = () => {
    this.model.initPrevResult();
    this.ResultView.renderCarNames(this.model.getCarsName());
    for (let i = 0; i < this.model.getRacingCount(); i += 1) {
      const stageInfo = this.model.playTurn();
      this.ResultView.renderArrows(stageInfo);
    }
    this.endGame();
  };

  endGame = () => {
    const winners = this.model.pickWinners();
    this.WinnerView.renderWinners(winners);
    this.WinnerView.renderReplayButton();
  };

  clickReplayButtonHandler = () => {
    this.model.resetGameStatus();
    this.resetGame();
  };

  resetGame = () => {
    this.CarNamesInputView.resetValue();
    this.CountInputView.resetValue();
    this.ResultView.resetResult();
    this.CarNamesInputView.enableCarNamesInput();
  };
}
