import { on } from "./utils/helper.js";
import { checkRaceNumber, checkValidCarName } from "./InputValidation.js";
import RacingGameModel from "./RacingGameModel.js";
import RacingGameView from "./RacingGameView.js";

class RacingGameController {
  constructor() {
    this.isCorrectCarName = false;
    this.isCorrectRaceCount = false;

    this.racingGameView = new RacingGameView();
    this.racingGameModel = new RacingGameModel();

    this.subscribeViewEvent();

  }

  subscribeViewEvent() {
    on(this.racingGameView.carNameForm, "@carName", (event) => this.submitCarName(event));
    on(this.racingGameView.raceCountForm, "@raceCount", (event) => this.submitRaceCount(event));
  }

  submitCarName(event) {
    this.carNameValue = event.detail;
    this.isCorrectCarName = checkValidCarName(event.detail);
    this.isCorrectCarName && this.racingGameView.showRaceCountForm();
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
    const carList = this.racingGameModel.startRacingGame(this.carNameValue);
    this.racingGameModel.countCarsMove(this.raceCountValue)
    const winner = this.racingGameModel.findWinner();
    this.showRacingGameResult(carList, winner);
  }

  showRacingGameResult(carList, winner) {
    this.racingGameView.showCarBoxes(carList);
    this.racingGameView.showCarsMove(carList);
    this.racingGameView.showWinner(winner);
    this.racingGameView.makeDisableForm();
    this.racingGameView.bindRestartEvent();
    on(this.racingGameView.restartButton, "@restartGame", () => this.submitRestartRace());
  }

  submitRestartRace() {
    this.racingGameView.restartRace();
    this.isCorrectCarName = false;
    this.isCorrectRaceCount = false;
  }

}

export default RacingGameController;
