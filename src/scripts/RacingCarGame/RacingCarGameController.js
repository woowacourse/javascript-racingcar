import RacingCarGameValidation from "./RacingCarGameValidation.js";
import RacingCarGameView from "./RacingCarGameView.js";
import { getRacingCarGameModel } from "../store.js";
import { CAR_NAME_SEPERATOR } from "../constants.js";
import { $carNameSubmit } from "../elements.js";

export default class RacingCarGameController {
  constructor() {
    this.racingCarGameModel = getRacingCarGameModel();
  }

  static getModel() {
    return new this().racingCarGameModel;
  }

  static seperateCarNames(carNames, seperator) {
    return carNames.split(seperator).map((carName) => carName.trim());
  }

  static registerCarNames(carNames) {
    const carNameList = this.seperateCarNames(carNames, CAR_NAME_SEPERATOR);
    const isCarNameListValid = carNameList.every((carName) =>
      RacingCarGameValidation.isCarNameValid(carName)
    );

    if (!isCarNameListValid) {
      return;
    }

    this.getModel().registerCars(carNameList);
    console.log(this.getModel());
    RacingCarGameView.updateResultArea(this.getModel().carList);
    RacingCarGameView.changeInnerText($carNameSubmit, "수정");
  }

  static getWinners(carList) {
    const sortedCarList = [...carList].sort((a, b) => b.record - a.record);
    const maxCarRecord = sortedCarList[0].record;
    const winners = sortedCarList
      .filter((car) => car.record === maxCarRecord)
      .map((car) => car.carName);

    return winners;
  }

  static finishGame() {
    const winners = this.getWinners(this.getModel().carList);

    RacingCarGameView.deactivateCarNameSubmitButton();
    RacingCarGameView.deactivatePlayGameButton();
    RacingCarGameView.showWinners(winners);
    RacingCarGameView.showRestartButton();
    this.getModel().clearCarsRecord();
  }

  static playRacingCarGame(tryCountInput) {
    const tryCount = Number(tryCountInput);

    if (!RacingCarGameValidation.isTryCountValid(tryCount)) {
      RacingCarGameView.clearTryCountInput();
      return;
    }
    if (RacingCarGameValidation.isCarListEmpty()) {
      return;
    }

    for (let i = 0; i < tryCount; i += 1) {
      this.getModel().moveCarsByRandom();
    }
    RacingCarGameView.updateResultArea(this.getModel().carList);
    this.finishGame();
  }

  static restartRacingCarGame() {
    this.getModel().clearCarList();
    RacingCarGameView.resetGameView();
  }
}
