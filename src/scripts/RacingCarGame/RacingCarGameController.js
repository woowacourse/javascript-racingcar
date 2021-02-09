import RacingCarGameValidation from './RacingCarGameValidation.js';
import RacingCarGameView from './RacingCarGameView.js';
import { racingCarGameModel } from '../store.js';
import { CAR_NAME_SEPERATOR } from '../constants.js';

export default class RacingCarGameController {
  static getCarNameList(carNames) {
    return carNames.split(CAR_NAME_SEPERATOR).map((carName) => carName.trim());
  }

  static registerCarNames(carNames) {
    const carNameList = RacingCarGameController.getCarNameList(carNames);
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

  static playRacingCarGame(tryCountInput) {
    const tryCount = Number(tryCountInput);
    if (!RacingCarGameValidation.isTryCountValid(tryCount)) {
      RacingCarGameView.clearTryCountInput();
      return;
    }
    if (!RacingCarGameValidation.isCarListEmpty()) {
      for (let i = 0; i < tryCount; i += 1) {
        racingCarGameModel.moveCarsByRandom();
      }
      RacingCarGameView.updateResultArea(racingCarGameModel.carList);
      const winners = RacingCarGameController.getWinners(
        racingCarGameModel.carList
      );
      RacingCarGameView.showWinners(winners);
      RacingCarGameView.showRestartButton();
      racingCarGameModel.clearCarsRecord();
    }
  }

  static restartRacingCarGame() {
    racingCarGameModel.clearCarList();
    RacingCarGameView.clearTryCountInput();
    RacingCarGameView.clearCarNamesInput();
    RacingCarGameView.updateResultArea(racingCarGameModel.carList);
    RacingCarGameView.hideRestartButton();
    RacingCarGameView.hideWinners();
  }
}
