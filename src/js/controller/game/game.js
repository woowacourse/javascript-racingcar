import { EXCEPTIONS } from "../../util/constants.js";
import { racingCountInput, racingCountSubmitButton } from "../../util/elements.js";
import { isValidRacingCount } from "./checkFunctions.js";
import { setResultArea } from "../../view/resultViewControl.js";
import { showWinnerAndRestartButton } from "../../view/viewControl.js";
import { setWinnerText } from "../../view/winnerViewControl.js";

export default class Game {
  constructor(cars) {
    this.init();
    this.cars = cars;
    this.addRacingCountSubmitEvent();
  }

  init() {
    this.racingCount = 0;
    this.round = [];
    this.winner = [];
  }

  makeRacingCount(racingCountInputValue) {
    if (!racingCountInputValue || !isValidRacingCount(racingCountInputValue)) {
      return alert(EXCEPTIONS.INCORRECT_RACING_COUNT);
    }

    this.racingCount = parseInt(racingCountInputValue, 10);
    return true;
  }

  goNextStep() {
    this.startGame();
    this.showWinner();
    racingCountInput.readOnly = true;
    racingCountSubmitButton.disabled = true;
  }

  addRacingCountSubmitEvent() {
    racingCountInput.addEventListener("keyup", e => {
      if (
        e.key === "Enter" &&
        this.makeRacingCount(racingCountInput.value)
      ) {
        this.goNextStep();
      }
    });

    racingCountSubmitButton.addEventListener("click", () => {
      if (this.makeRacingCount(racingCountInput.value)) {
        this.goNextStep();
      }
    });
  }

  startGame() {
    for (let i = 0; i < this.racingCount; i++) {
      this.startRound();
    }
    this.showResult();
  }

  startRound() {
    const carList = this.cars.getCars();

    carList.forEach(car => {
      car.goForward();
    });

    this.cars.setCars(carList);
  }

  getWinner() {
    const carList = this.cars.getCars();
    const winners = [];
    const maxLocation = Math.max(...carList.map(car => car.location));

    carList.forEach(car => {
      const { name, location } = car;
      if (location === maxLocation) {
        winners.push(name);
      }
    });

    return winners;
  }

  showResult() {
    const roundResult = JSON.parse(JSON.stringify(this.cars.getCars()));
    this.round.push(roundResult);
    setResultArea(roundResult);
  }

  showWinner() {
    showWinnerAndRestartButton();
    this.winner = this.getWinner();
    setWinnerText(this.winner);
  }
}
