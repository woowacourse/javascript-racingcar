import Car from '../model/Car.js';
import RacingResult from '../views/RacingResult.js';
import { $ } from '../utils/dom.js';
import { SELECTOR, CELEBRATE_MESSAGE, DELAY_TIME, MOVE_SCORE } from '../utils/constants.js';
import { getMaxNumber, getRandomNumber } from '../utils/number.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
    this.RacingResult = new RacingResult();
    this.bindEvents();
  }

  bindEvents() {
    $(SELECTOR.RESTART_BUTTON).addEventListener('click', this.restartRacingGame.bind(this));
  }

  generateCars(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  handleCarNamesSubmit(carNames) {
    this.generateCars(carNames);
    this.RacingResult.showNextStage($(SELECTOR.RACING_COUNT_CONTAINER));
  }

  selectWinner() {
    const maxDistance = getMaxNumber(this.cars);
    return this.cars.filter((car) => car.distance === maxDistance);
  }

  playRace() {
    this.cars.forEach((car) => {
      const randomNumber = getRandomNumber(MOVE_SCORE.MIN, MOVE_SCORE.MAX);
      if (randomNumber >= MOVE_SCORE.EFFECTIVE) {
        car.moveForward();
        this.RacingResult.renderMoveForward(car.name);
      }
    });
  }

  startRacingGame(racingCount) {
    this.RacingResult.showNextStage($(SELECTOR.RACING_CONTAINER));
    this.RacingResult.renderRacingStatus(this.cars);

    let round = 0;
    const raceTimer = setInterval(() => {
      this.playRace();

      round += 1;
      if (round === Number(racingCount)) {
        clearInterval(raceTimer);
        this.endRacingGame();
      }
    }, DELAY_TIME.RACE);
  }

  showCelebrateMessage() {
    setTimeout(() => alert(CELEBRATE_MESSAGE), DELAY_TIME.ALERT);
  }

  endRacingGame() {
    this.RacingResult.removeSpinner();
    const finalWinner = this.selectWinner()
      .map((winner) => winner.name)
      .join(', ');
    this.RacingResult.showNextStage($(SELECTOR.RESULT_CONTAINER));
    this.RacingResult.renderFinalWinner(finalWinner);
    this.showCelebrateMessage();
  }

  restartRacingGame() {
    this.cars = [];
    this.RacingResult.startUpScreen();
  }
}
