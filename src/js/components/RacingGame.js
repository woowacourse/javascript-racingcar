import Car from '../model/Car.js';
import { $ } from '../utils/dom.js';
import { SELECTOR, CELEBRATE_MESSAGE, DELAY_TIME, MOVE_SCORE } from '../utils/constants.js';
import { isEffectiveScore } from '../utils/validation.js';
import { getMaxNumber, getRandomNumber, delayedAlert } from '../utils/general.js';
import { showElement } from '../utils/attribute.js';
import {
  renderFinalWinner,
  renderArrow,
  renderRacingStatus,
  removeSpinner,
  startUpScreen,
} from '../views/racingResult.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
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
        renderArrow(car.name);
      }
    });
  }

  startRacingGame(racingCount) {
    renderRacingStatus(this.cars);

    let round = 0;
    const racingTimer = setInterval(() => {
      this.playRace();

      round += 1;
      if (round === Number(racingCount)) {
        clearInterval(racingTimer);
        this.endRacingGame();
      }
    }, DELAY_TIME.RACE);
  }

  endRacingGame() {
    const finalWinner = this.selectWinner()
      .map((winner) => winner.name)
      .join(', ');
    renderFinalWinner(finalWinner);
    removeSpinner();
    showElement($(SELECTOR.RESULT_CONTAINER));
    delayedAlert(CELEBRATE_MESSAGE, DELAY_TIME.ALERT);
  }

  restartRacingGame() {
    this.cars = [];
    startUpScreen();
  }
}
