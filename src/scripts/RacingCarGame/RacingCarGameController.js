import racingCarGameValidator from './racingCarGameValidator.js';
import racingCarGameView from './racingCarGameView.js';
import { racingCarGameModel } from '../store.js';
import util from '../utils.js';
import {
  CAR_NAME_SEPERATOR,
  getCongratulationsMessage,
  CONGRATULATION_DURATION_SECOND,
  SHOULD_REGISTER_CAR_FIRST_MESSAGE,
  RACE_IS_ON_GOING_MESSAGE,
} from '../constants.js';

const getWinners = (carList) => {
  const sortedCarList = [...carList].sort((a, b) => b.record - a.record);
  const maxCarRecord = sortedCarList[0].record;
  const winners = sortedCarList
    .filter((car) => car.record === maxCarRecord)
    .map((car) => car.carName);

  return winners;
};

const showWinners = (winners) => {
  racingCarGameView.showWinners(winners);
};

const getCarNameList = (carNames) => {
  return carNames.split(CAR_NAME_SEPERATOR).map((carName) => carName.trim());
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
  racingCarGameView.showRestartButton();
};

const processRacingGame = (tryCount) => {
  initializeRacingGame();
  startRacingGame(tryCount);
}

const finishRacingGame = (winners) => {
  alert(getCongratulationsMessage(winners));
  racingCarGameModel.setRaceIsNotOnGoing();
  racingCarGameModel.clearCarsRecord();
}

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
      alert(RACE_IS_ON_GOING_MESSAGE);
      return;
    }
    if (racingCarGameValidator.isCarListEmpty(racingCarGameModel.carList)) {
      alert(SHOULD_REGISTER_CAR_FIRST_MESSAGE);
      return;
    }
    if (!racingCarGameValidator.isTryCountValid(tryCount)) {
      racingCarGameValidator.alertTryCountNotValid(tryCount);
      racingCarGameView.clearTryCountInput();
      return;
    }
    processRacingGame(tryCount)
    const winners = getWinners(racingCarGameModel.carList);
    showWinners(winners);  
    await racingCarGameView.startRacingGameAnimation();
    await util.waitSeconds(CONGRATULATION_DURATION_SECOND);
    finishRacingGame(winners);
  },

  restartRacingCarGame() {
    if (racingCarGameModel.isRaceOnGoing) {
      alert(RACE_IS_ON_GOING_MESSAGE);
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
