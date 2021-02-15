import racingCarGameValidator from './racingCarGameValidator.js';
import racingCarGameView from './racingCarGameView.js';
import { racingCarGameModel } from '../store.js';
import { CAR_NAME_SEPERATOR, getCongratulationsMessage } from '../constants.js';

const getWinners = (carList) => {
  const sortedCarList = [...carList].sort((a, b) => b.record - a.record);
  const maxCarRecord = sortedCarList[0].record;
  const winners = sortedCarList
    .filter((car) => car.record === maxCarRecord)
    .map((car) => car.carName);

  return winners;
};

const initializeRacingGame = () => {
  racingCarGameModel.setRaceIsOnGoing();
  racingCarGameView.takeOffRestartButton();
  racingCarGameView.takeOffWinners();
};

const startRacingGame = (tryCount) => {
  for (let i = 0; i < tryCount; i += 1) {
    racingCarGameModel.moveCarsByRandom();
  }
  racingCarGameView.updateResultArea(racingCarGameModel.carList);
  racingCarGameView.attachRestartButton();
};

const showWinners = (winners) => {
  racingCarGameView.attachWinners(winners);
};

const getCarNameList = (carNames) => {
  return carNames.split(CAR_NAME_SEPERATOR).map((carName) => carName.trim());
};

const showCongratulationMessage = (winners) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      alert(getCongratulationsMessage(winners));
      racingCarGameModel.setRaceIsNotOnGoing();
      resolve();
    }, 2000);
  });
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

  async playRacingCarGame(tryCountInput) {
    const tryCount = Number(tryCountInput);
    if (racingCarGameModel.isRaceOnGoing) {
      racingCarGameValidator.alertRaceIsOnGoing();
      return;
    }
    if (!racingCarGameValidator.isTryCountValid(tryCount)) {
      racingCarGameView.clearTryCountInput();
      racingCarGameValidator.alertTryCountNotValid(tryCount);
      return;
    }
    if (racingCarGameValidator.isCarListEmpty(racingCarGameModel.carList)) {
      racingCarGameValidator.alertCarListEmpty();
      return;
    }
    initializeRacingGame();
    startRacingGame(tryCount);
    const winners = getWinners(racingCarGameModel.carList);
    showWinners(winners);
    await racingCarGameView.startRacingGameAnimation();
    await showCongratulationMessage(winners);
    racingCarGameModel.clearCarsRecord();
  },

  restartRacingCarGame() {
    if (racingCarGameModel.isRaceOnGoing) {
      racingCarGameValidator.alertRaceIsOnGoing();
      return;
    }
    racingCarGameModel.clearCarList();
    racingCarGameView.clearTryCountInput();
    racingCarGameView.clearCarNamesInput();
    racingCarGameView.updateResultArea(racingCarGameModel.carList);
    racingCarGameView.takeOffRestartButton();
    racingCarGameView.takeOffWinners();
  },
};
