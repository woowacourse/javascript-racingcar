import RacingCarGameValidation from "./RacingCarGameValidation.js";
import RacingCarGameView from "./RacingCarGameView.js";
import { getRacingCarGameModel } from "../store.js";
import { CAR_NAME_SEPERATOR } from "../constants.js";
import { $carNameSubmit } from "../elements.js";

export default class RacingCarGameController {
  constructor() {
    this.racingCarGameModel = getRacingCarGameModel();
  }

  seperateCarNames(carNames, seperator) {
    return carNames.split(seperator).map((carName) => carName.trim());
  }

  registerCarNames(carNames) {
    const carNameList = this.seperateCarNames(carNames, CAR_NAME_SEPERATOR);
    const isCarNameListValid = carNameList.every((carName) =>
      RacingCarGameValidation.isCarNameValid(carName)
    );

    if (!isCarNameListValid) {
      return;
    }

    this.racingCarGameModel.registerCars(carNameList);
    console.log(this.racingCarGameModel);
    RacingCarGameView.updateResultArea(this.racingCarGameModel.carList);
    RacingCarGameView.changeInnerText($carNameSubmit, "수정");
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

    RacingCarGameView.deactivateCarNameSubmitButton();
    RacingCarGameView.deactivatePlayGameButton();
    RacingCarGameView.showWinners(winners);
    RacingCarGameView.showRestartButton();
    this.racingCarGameModel.clearCarsRecord();
  }

  playRacingCarGame(tryCountInput) {
    const tryCount = Number(tryCountInput);

    if (!RacingCarGameValidation.isTryCountValid(tryCount)) {
      RacingCarGameView.clearTryCountInput();
      return;
    }
    if (RacingCarGameValidation.isCarListEmpty()) {
      return;
    }

    for (let i = 0; i < tryCount; i += 1) {
      this.racingCarGameModel.moveCarsByRandom();
    }
    RacingCarGameView.updateResultArea(this.racingCarGameModel.carList);
    this.finishGame();
  }

  restartRacingCarGame() {
    this.racingCarGameModel.clearCarList();
    RacingCarGameView.resetGameView();
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
