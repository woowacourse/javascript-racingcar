import Validator from "./RacingCarGameValidator.js";
import RacingCarGameView from "./RacingCarGameView.js";
import RacingCarGameModel from "./RacingCarGameModel.js";
import Spinner from "../animations/Spinner.js";
import { CAR_NAME_SEPERATOR } from "../constants/racing_game_constants.js";
import { $carNameSubmit } from "../elements.js";

export default class RacingCarGameController {
  constructor() {
    this.racingCarGameModel = new RacingCarGameModel();
    this.racingCarGameView = new RacingCarGameView();
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
    this.racingCarGameView.updateResultArea(this.racingCarGameModel.carList);
    this.racingCarGameView.changeInnerText($carNameSubmit, "수정");
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

    this.racingCarGameView.showWinners(winners);
    this.racingCarGameView.showRestartButton();
    this.racingCarGameView.deactivateRestartButton();
    this.racingCarGameModel.clearCarsRecord();
    setTimeout(() => {
      alert(`${winners.join(", ")}! 우승을 축하합니다.`);
      this.racingCarGameView.activateRestartButton();
    }, 2000);
  }

  getSpinners(spinnerElements) {
    return Array.from(spinnerElements).map(
      ($spinner) => new Spinner($spinner, 6)
    );
  }

  runProgressiveRace(tryCount, delay) {
    return [...Array(tryCount)].reduce((promiseChain) => {
      return promiseChain.then(() => {
        return new Promise((resolve) => {
          const spinners = this.getSpinners(
            document.querySelectorAll(".spinner")
          );

          this.racingCarGameModel.moveCarsByRandom();
          spinners.forEach((spinner) => spinner.render());
          setTimeout(() => {
            spinners.forEach((spinner) => spinner.clear());
            this.racingCarGameView.updateResultArea(
              this.racingCarGameModel.carList
            );
            setTimeout(() => {
              resolve();
            }, 300);
          }, delay);
        });
      });
    }, Promise.resolve());
  }

  playRacingCarGame(tryCountInput) {
    const tryCount = Number(tryCountInput);

    if (!Validator.isTryCountValid(tryCount)) {
      this.racingCarGameView.clearTryCountInput();
      return;
    }
    if (Validator.isCarListEmpty(this.racingCarGameModel.carList)) {
      return;
    }

    this.racingCarGameView.deactivateCarNameSubmitButton();
    this.racingCarGameView.deactivatePlayGameButton();
    this.runProgressiveRace(tryCount, 1000).then(() => this.finishGame());
  }

  restartRacingCarGame() {
    this.racingCarGameModel.clearCarList();
    this.racingCarGameView.resetGameView();
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
