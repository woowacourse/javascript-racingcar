import RacingCarGameValidation from './RacingCarGameValidation.js';
import RacingCarGameView from './RacingCarGameView.js';
import { racingCarGameModel } from '../store.js';
import { CAR_NAME_SEPERATOR } from '../constants.js';

export default class RacingCarGameController {
  constructor() {}

  static seperateCarNames(carNames, seperator) {
    return carNames
      .split(seperator)
      .map((carName) => carName.trim());
  }

  static registerCarNames(carNames) {
    const carNameList = this.seperateCarNames(carNames, CAR_NAME_SEPERATOR);
    const isCarNameListValid = carNameList.every((carName) =>
      RacingCarGameValidation.isCarNameValid(carName)
    );
    if (isCarNameListValid) {
      racingCarGameModel.registerCars(carNameList);
      RacingCarGameView.updateResultArea(racingCarGameModel.carList);
    }
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
    const winners = this.getWinners(
      racingCarGameModel.carList
    );
    RacingCarGameView.showWinners(winners);
    RacingCarGameView.showRestartButton();
    racingCarGameModel.clearCarsRecord();
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
      racingCarGameModel.moveCarsByRandom();
    }
    RacingCarGameView.updateResultArea(racingCarGameModel.carList);
    this.finishGame();
  }

  static restartRacingCarGame() {
    racingCarGameModel.clearCarList();
    RacingCarGameView.resetGameView();
  }
}
