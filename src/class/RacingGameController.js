import { on } from "../utils/helper.js";
import { checkRaceNumber, checkValidCarName } from "../InputValidation.js";
class RacingGameController {
  constructor(racingGameModel, { racingInputView, racingGameView, racingResultView }) {
    this.racingGameModel = racingGameModel;
    this.racingInputView = racingInputView;
    this.racingGameView = racingGameView;
    this.racingResultView = racingResultView;

    this.isCorrectCarName = false;
    this.isCorrectRaceCount = false;

    this.subscribeViewEvent();

  }

  subscribeViewEvent() {
    on(this.racingInputView.carNameForm, "@carName", (event) => this.submitCarName(event));
    on(this.racingInputView.raceCountForm, "@raceCount", (event) => this.submitRaceCount(event));
  }

  submitCarName(event) {
    this.carNameValue = event.detail;
    this.isCorrectCarName = checkValidCarName(event.detail);
    this.isCorrectCarName && this.racingInputView.showRaceCountForm();
    this.isCorrectCarName && this.checkStartRacingGame();
  }

  submitRaceCount(event) {
    this.raceCountValue = event.detail;
    this.isCorrectRaceCount = checkRaceNumber(event.detail);
    this.isCorrectRaceCount && this.checkStartRacingGame();
  }

  checkStartRacingGame() {
    if (!this.isCorrectCarName || !this.isCorrectRaceCount) {
      return;
    }
    this.carList = this.racingGameModel.startRacingGame(this.carNameValue);
    this.racingGameModel.countCarsMove(this.raceCountValue)
    this.carMaxRace = this.racingGameModel.getCarMaxRace();
    this.winner = this.racingGameModel.findWinner();
    this.showRacingGameResult();
  }

  showRacingGameResult() {
    this.racingGameView.showCarBoxes(this.carList);
    this.racingInputView.makeDisableForm();
    this.racingGameView.showCarsMove(this.carList, this.carMaxRace);
    this.racingResultView.showWinner(this.carMaxRace, this.winner);
    this.racingResultView.bindRestartEvent();
    on(this.racingResultView.restartButton, "@restartGame", () => this.submitRestartRace());
  }

  submitRestartRace() {
    this.racingGameView.restartRace();
    this.racingInputView.restartRace();
    this.isCorrectCarName = false;
    this.isCorrectRaceCount = false;
  }

}

export default RacingGameController;
