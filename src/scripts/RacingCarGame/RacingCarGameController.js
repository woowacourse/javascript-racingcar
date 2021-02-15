import racingCarGameValidator from './racingCarGameValidator.js';
import racingCarGameView from './racingCarGameView.js';
import { racingCarGameModel } from '../store.js';
import { CAR_NAME_SEPERATOR } from '../constants.js';

const getWinners = (carList) => {
  const sortedCarList = [...carList].sort((a, b) => b.record - a.record);
  const maxCarRecord = sortedCarList[0].record;
  const winners = sortedCarList
    .filter((car) => car.record === maxCarRecord)
    .map((car) => car.carName);

  return winners;
};

const startRacing = (tryCount) => {
  for (let i = 0; i < tryCount; i += 1) {
    racingCarGameModel.moveCarsByRandom();
  }
  racingCarGameView.updateResultArea(racingCarGameModel.carList);
  const winners = getWinners(racingCarGameModel.carList);
  racingCarGameView.showWinners(winners);
  racingCarGameView.showRestartButton();
};

const getCarNameList = (carNames) => {
  return carNames.split(CAR_NAME_SEPERATOR).map((carName) => carName.trim());
};

export default {
  registerCarNames(carNames) {
    const carNameList = getCarNameList(carNames);
    if (!racingCarGameValidator.isCarNameListValid(carNameList)) {
      racingCarGameValidator.alertCarNameListNotVaild(carNameList);
      return;
    }
    racingCarGameModel.registerCars(carNameList);
    racingCarGameView.updateResultArea(racingCarGameModel.carList);
  },

  playRacingCarGame(tryCountInput) {
    const tryCount = Number(tryCountInput);
    if (!racingCarGameValidator.isTryCountValid(tryCount)) {
      racingCarGameView.clearTryCountInput();
      racingCarGameValidator.alertTryCountNotValid(tryCount);
      return;
    }
    if (racingCarGameValidator.isCarListEmpty(racingCarGameModel.carList)) {
      racingCarGameValidator.alertCarListEmpty();
      return;
    }
    startRacing(tryCount);
    racingCarGameModel.clearCarsRecord();
  },

  restartRacingCarGame() {
    racingCarGameModel.clearCarList();
    racingCarGameView.clearTryCountInput();
    racingCarGameView.clearCarNamesInput();
    racingCarGameView.updateResultArea(racingCarGameModel.carList);
    racingCarGameView.hideRestartButton();
    racingCarGameView.hideWinners();
  },
};
