import {
  racingCountInput,
  racingCountSubmitButton,
} from "../../util/elements.js";
import { EXCEPTIONS } from "../../util/constants.js";
import { isValidRacingCount } from "./checkFunctions.js";
import { setResultArea } from "../../view/resultView.js";
import { setWinnerText } from "../../view/winnerView.js";
import {
  lockRacingCount,
  toggleHiddenWinnerAndRestartArea,
} from "../../view/commonView.js";

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
    lockRacingCount(true);
    this.startGame();

    setTimeout(() => {
      this.showWinner();
      setTimeout(() => {
        alert(`축하합니다. ${this.winner.join(", ")} 님이 우승하셨습니다!`);
      }, 2000);
    }, 1000 * this.racingCount);
  }

  addRacingCountSubmitEvent() {
    racingCountInput.addEventListener("keyup", e => {
      if (e.key === "Enter" && this.makeRacingCount(racingCountInput.value)) {
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
    let roundCount = 1;

    const gameRoundInterval = setInterval(() => {
      if (roundCount++ === this.racingCount) {
        clearInterval(gameRoundInterval);
      }
      this.startRound();
      this.showResult();
    }, 1000 * roundCount);
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
    toggleHiddenWinnerAndRestartArea();
    this.winner = this.getWinner();
    setWinnerText(this.winner);
  }
}
