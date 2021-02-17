import Validator from "./RacingCarGameValidator.js";
import RacingCarGameView from "./RacingCarGameView.js";
import RacingCarGameModel from "./RacingCarGameModel.js";
import { CAR_NAME_SEPERATOR } from "../constants/racing_game_constants.js";
import { $carNameSubmit } from "../elements.js";
import { setTimeoutWithSpinner } from "../utils/timeUtils.js";

export default class RacingCarGameController {
  constructor() {
    this.racingCarGameModel = new RacingCarGameModel();
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

    RacingCarGameView.showWinners(winners);
    RacingCarGameView.showRestartButton();
    RacingCarGameView.deactivateRestartButton();
    this.racingCarGameModel.clearCarsRecord();
    setTimeout(() => {
      alert(`${winners.join(", ")}! 우승을 축하합니다.`);
      RacingCarGameView.activateRestartButton();
    }, 2000);
  }

  async runProgressiveRace(tryCount, delay) {
    for (let i = 0; i < tryCount; i++) {
      this.racingCarGameModel.moveCarsByRandom();
      await setTimeoutWithSpinner(
        document.querySelectorAll(".spinner"),
        RacingCarGameView.updateResultArea,
        delay,
        this.racingCarGameModel.carList
      );
    }
  }

  async playRacingCarGame(tryCountInput) {
    const tryCount = Number(tryCountInput);

    if (!Validator.isTryCountValid(tryCount)) {
      RacingCarGameView.clearTryCountInput();
      return;
    }
    if (Validator.isCarListEmpty(this.racingCarGameModel.carList)) {
      return;
    }

    RacingCarGameView.deactivateCarNameSubmitButton();
    RacingCarGameView.deactivatePlayGameButton();
    await this.runProgressiveRace(tryCount, 1000);
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
