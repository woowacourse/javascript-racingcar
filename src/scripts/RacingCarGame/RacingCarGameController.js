import Validator from "./RacingCarGameValidator.js";
import View from "./RacingCarGameView.js";
import Model from "./RacingCarGameModel.js";
import { CAR_NAME_SEPERATOR } from "../constants/racing_game_constants.js";
import { $carNameSubmit } from "../elements.js";
import { setTimeoutWithSpinner } from "../utils/timeUtils.js";

export default class RacingCarGameController {
  constructor() {
    this.model = new Model();
  }

  seperateCarNames(carNames, seperator) {
    return carNames.split(seperator).map((carName) => carName.trim());
  }

  registerCarNames(carNames) {
    const carNameList = this.seperateCarNames(carNames, CAR_NAME_SEPERATOR);
    const isCarNameListValid = carNameList.every((carName) =>
      Validator.isCarNameValid(carName)
    );

    if (!isCarNameListValid) {
      return;
    }

    this.model.registerCars(carNameList);
    View.updateResultArea(this.model.carList);
    View.changeInnerText($carNameSubmit, "수정");
  }

  getWinners(carList) {
    const sortedCarList = [...carList].sort((a, b) => b.record - a.record);
    const maxCarRecord = sortedCarList[0].record;
    const winners = sortedCarList
      .filter((car) => car.record === maxCarRecord)
      .map((car) => car.carName);

    return winners;
  }

  finishGame() {
    const winners = this.getWinners(this.model.carList);

    View.showWinners(winners);
    View.showRestartButton();
    this.model.clearCarsRecord();
  }

  async runProgressiveRace(tryCount, delay) {
    for (let i = 0; i < tryCount; i++) {
      this.model.moveCarsByRandom();
      await setTimeoutWithSpinner(
        document.querySelectorAll(".spinner"),
        View.updateResultArea,
        delay,
        this.model.carList
      );
    }
  }

  async playRacingCarGame(tryCountInput) {
    const tryCount = Number(tryCountInput);

    if (!Validator.isTryCountValid(tryCount)) {
      View.clearTryCountInput();
      return;
    }
    if (Validator.isCarListEmpty(this.model.carList)) {
      return;
    }

    View.deactivateCarNameSubmitButton();
    View.deactivatePlayGameButton();
    await this.runProgressiveRace(tryCount, 2000);
    this.finishGame();
  }

  restartRacingCarGame() {
    this.model.clearCarList();
    View.resetGameView();
  }

  onCarNameSubmit(carNamesString) {
    this.registerCarNames(carNamesString);
  }

  onClickPlayGameButton(tryCount) {
    this.playRacingCarGame(tryCount);
  }

  onClickRestartButton() {
    this.restartRacingCarGame();
  }
}
