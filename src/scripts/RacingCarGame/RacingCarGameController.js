import Validator from "./RacingCarGameValidator.js";
import View from "./RacingCarGameView.js";
import Model from "./RacingCarGameModel.js";
import { CAR_NAME_SEPERATOR } from "../constants/racing_game_constants.js";
import { $carNameSubmit } from "../elements.js";

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

    this.racingCarGameModel.registerCars(carNameList);
    View.updateResultArea(this.racingCarGameModel.carList);
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
    const winners = this.getWinners(this.racingCarGameModel.carList);

    View.deactivateCarNameSubmitButton();
    View.deactivatePlayGameButton();
    View.showWinners(winners);
    View.showRestartButton();
    this.racingCarGameModel.clearCarsRecord();
  }

  playRacingCarGame(tryCountInput) {
    const tryCount = Number(tryCountInput);

    if (!Validator.isTryCountValid(tryCount)) {
      View.clearTryCountInput();
      return;
    }
    if (Validator.isCarListEmpty(this.model.carList)) {
      return;
    }

    for (let i = 0; i < tryCount; i += 1) {
      this.racingCarGameModel.moveCarsByRandom();
    }
    View.updateResultArea(this.racingCarGameModel.carList);
    this.finishGame();
  }

  restartRacingCarGame() {
    this.racingCarGameModel.clearCarList();
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
