import { $ } from '../utils/dom.js';
import { delayedAlert, getTimeInSecond } from '../utils/general.js';
import { getWinners, getCarsMovement } from '../utils/racingGame.js';
import { SELECTOR, MESSAGE, END_MESSAGE_DELAY } from '../constants.js';
import Car from '../class/Car.js';
import GameView from '../view/GameView.js';
import FormView from '../view/FormView.js';
import RacingCarGameForm from './RacingCarGameForm.js';

export default class RacingCarGame {
  #container = $(SELECTOR.APP);
  #cars = [];
  #winners = [];
  #gameView = new GameView();
  #formView = new FormView();

  constructor() {
    this.bindEvents();
    new RacingCarGameForm({
      handleSubmitCarNames: names => this.handleSubmitCarNames(names),
      handleSubmitRacingCount: count => this.startGame(count),
    });
  }

  bindEvents() {
    $(SELECTOR.RESTART_BUTTON, this.#container).addEventListener('click', () =>
      this.onClickRestart(),
    );
  }

  onClickRestart() {
    this.#cars = [];
    this.#winners = [];

    this.#formView.restartGame();
    this.#gameView.restartGame();
  }

  handleSubmitCarNames(names) {
    this.#cars = names.map(name => new Car(name));
    this.#formView.showRacingCountInput();
  }

  startGame(count) {
    this.progressGame(count);
    this.#formView.renderRacingStatus();
    this.#gameView.renderRacingStatus(this.#cars);
  }

  endGame() {
    this.#winners = getWinners(this.#cars);
    this.#gameView.endGame(this.#winners);

    delayedAlert(MESSAGE.GAME_END, END_MESSAGE_DELAY);
  }

  progressGame(count) {
    let start = 0;
    let before = 0;
    let isLoading = true;

    const progressBySecond = timestamp => {
      const timeInSecond = getTimeInSecond(timestamp);
      if (!start) {
        start = timeInSecond;
      }
      const progress = timeInSecond - start;
      if (progress === count) {
        this.endGame();
        return;
      }
      if (isLoading) {
        this.#gameView.renderSpinners();
        isLoading = false;
      }
      if (before !== progress) {
        this.#gameView.renderRacingProgress(getCarsMovement(this.#cars));
        before = progress;
        isLoading = true;
      }
      window.requestAnimationFrame(progressBySecond);
    };
    window.requestAnimationFrame(progressBySecond);
  }
}
