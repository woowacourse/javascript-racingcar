import Game from "./model/Game.js";
import Cars from "./controller/cars/CarsController.js";
import { EXCEPTIONS, RACING_COUNT } from "./controller/constants.js";
import { setResultArea } from "./view/resultView.js";
import { setWinnerText } from "./view/winnerView.js";
import {
  focusElement,
  lockRacingCount,
  makeInitialView,
  toggleHiddenWinnerAndRestartArea,
} from "./view/commonView.js";
import { isInteger } from "./util/checkFunctions.js";
import {
  carNamesInput,
  racingCountArea,
  racingCountInput,
  restartButton,
} from "./util/elements.js";

class RacingCarGame {
  constructor() {
    this.cars = new Cars();
    this.game = new Game();
    focusElement(carNamesInput);
    this.addRacingCountSubmitEvent();
    this.addRestartEvent();
  }

  isValidRacingCount(racingCountInputValue) {
    return (
      isInteger(racingCountInputValue) &&
      parseInt(racingCountInputValue, 10) >= RACING_COUNT.MIN
    );
  }

  makeRacingCount(racingCountInputValue) {
    if (!racingCountInputValue || !this.isValidRacingCount(racingCountInputValue)) {
      return alert(EXCEPTIONS.INCORRECT_RACING_COUNT);
    }

    return parseInt(racingCountInputValue, 10);
  }

  startRound() {
    const carList = this.cars.getCarList();

    carList.forEach(car => {
      car.goForward();
    });

    this.cars.setCarList(carList);
  }

  startGame() {
    const racingCount = this.game.getRacingCount();
    let roundCount = 1;

    setResultArea(this.cars.getCarList());
    const gameRoundInterval = setInterval(() => {
      if (roundCount++ === racingCount) {
        clearInterval(gameRoundInterval);
      }
      this.startRound();
      this.showResult();
    }, 1000 * roundCount);
  }

  getWinner() {
    const carList = this.cars.getCarList();
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
    const roundResult = JSON.parse(JSON.stringify(this.cars.getCarList()));
    setResultArea(roundResult);
  }

  showWinner() {
    toggleHiddenWinnerAndRestartArea();
    this.game.setWinner(this.getWinner());
    setWinnerText(this.game.getWinner());
  }

  promiseDelay = (delay = 0) => new Promise(resolve => {
    setTimeout(resolve, delay);
  });

  submitFunc = async e => {
    e.preventDefault();
    const racingCount = this.makeRacingCount(racingCountInput.value);

    if (racingCount) {
      this.game.setRacingCount(racingCount);
      lockRacingCount(true);
      this.startGame();

      await this.promiseDelay(1000 * racingCount);
      await this.showWinner();
      await this.promiseDelay(2000);
      alert(`축하합니다. ${this.game.getWinner().join(", ")} 님이 우승하셨습니다!`);
    }
  }

  addRacingCountSubmitEvent() {
    racingCountArea.addEventListener("submit", this.submitFunc);
  }

  addRestartEvent() {
    restartButton.addEventListener("click", () => {
      makeInitialView();
      this.cars.init();
      this.game.init();
    });
  }
}

new RacingCarGame();
