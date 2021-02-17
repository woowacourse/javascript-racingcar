import Validator from "./RacingCarGameValidator.js";
import RacingCarGameView from "./RacingCarGameView.js";
import RacingCarGameModel from "./RacingCarGameModel.js";
import { CAR_NAME_SEPERATOR } from "../constants/racing_game_constants.js";
import { $carNameSubmit } from "../elements.js";
import { setTimeoutWithSpinner } from "../utils/timeUtils.js";

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

  async runProgressiveRace(tryCount, delay) {
    for (let i = 0; i < tryCount; i++) {
      this.racingCarGameModel.moveCarsByRandom();
      await setTimeoutWithSpinner(
        document.querySelectorAll(".spinner"),
        this.racingCarGameView.updateResultArea,
        delay,
        this.racingCarGameModel.carList
      );
    }
  }

  async playRacingCarGame(tryCountInput) {
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
    await this.runProgressiveRace(tryCount, 1000);
    this.finishGame();
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
