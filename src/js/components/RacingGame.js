import Car from '../model/Car.js';
import RacingResult from '../views/RacingResult.js';
import { $ } from '../utils/dom.js';
import { SELECTOR, CELEBRATE_MESSAGE, DELAY_TIME, MOVE_SCORE } from '../utils/constants.js';
import { isEffectiveScore } from '../utils/validation.js';
import { getMaxNumber, getRandomNumber, delayedAlert } from '../utils/general.js';

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

  selectWinner() {
    const maxDistance = getMaxNumber(this.cars);
    return this.cars.filter((car) => car.distance === maxDistance);
  }

  playRace() {
    this.cars.forEach((car) => {
      const number = getRandomNumber(MOVE_SCORE.MIN, MOVE_SCORE.MAX);
      if (isEffectiveScore(number)) {
        car.moveForward();
        this.RacingResult.renderMoveForward(car.name);
      }
    });
  }

  startRacingGame(racingCount) {
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

  endRacingGame() {
    this.RacingResult.removeSpinner();
    const finalWinner = this.selectWinner()
      .map((winner) => winner.name)
      .join(', ');
    this.RacingResult.showNextStage($(SELECTOR.RESULT_CONTAINER));
    this.RacingResult.renderFinalWinner(finalWinner);
    delayedAlert(CELEBRATE_MESSAGE, DELAY_TIME.ALERT);
  }

  restartRacingGame() {
    this.cars = [];
    this.RacingResult.startUpScreen();
  }
}
