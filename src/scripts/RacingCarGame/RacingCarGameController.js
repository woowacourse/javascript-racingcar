import RacingCarGameValidation from './RacingCarGameValidation.js';
import RacingCarGameView from './RacingCarGameView.js';
import { racingCarGameModel } from '../store.js';
import { CAR_NAME_SEPERATOR } from '../constants.js';

export default class RacingCarGameController {
  static getCarNameList(carNames) {
    return carNames
      .split(CAR_NAME_SEPERATOR)
      .map(carName => carName.trim());
  }
  
  static registerCarNames(carNames) {
    const carNameList = RacingCarGameController.getCarNameList(carNames);
    const isCarNameListValid = carNameList.every(carName => RacingCarGameValidation.isCarNameValid(carName));
    if (isCarNameListValid) {
      racingCarGameModel.registerCars(carNameList);
      RacingCarGameView.updateResultArea(racingCarGameModel.carList);
    }
  }

  static playRacingCarGame(tryCountInput) {
    const tryCount = Number(tryCountInput);
    if (!RacingCarGameValidation.isTryCountValid(tryCount)) {
      RacingCarGameView.clearTryCountInput();
      return
    }
    if (!RacingCarGameValidation.isCarListEmpty()) {
      for (let i = 0; i < tryCount; i += 1) {
        racingCarGameModel.moveCarsForward();
      }
      RacingCarGameView.updateResultArea(racingCarGameModel.carList);
      racingCarGameModel.clearCarsRecord();
    }
  }
}