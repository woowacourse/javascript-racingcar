import { RacingGame, Car } from '../model/index.js';
import { RacingGameView } from '../view/index.js';
import {
  $,
  delay,
  isValidNameInput,
  isValidCountInput,
} from '../utils/index.js';
import { ALERT_RESTART } from '../constants/index.js';

export default class RacingGameController {
  constructor() {
    this.racingGame = new RacingGame();
    this.view = new RacingGameView();
    this.racingGame.reset();
    this.view.reset();
    this.setEvent();
  }

  setEvent() {
    $('.name-container').addEventListener(
      'click',
      this.handleClickNameBtn.bind(this)
    );
    $('.count-container').addEventListener(
      'click',
      this.handleClickCountBtn.bind(this)
    );
    $('.result-container').addEventListener(
      'click',
      this.handleClickResetBtn.bind(this)
    );
  }

  handleClickNameBtn({ target: { classList } }) {
    if (!classList.contains('car-name-btn')) {
      return;
    }

    if (this.racingGame.isEnd) {
      alert(ALERT_RESTART);
      return;
    }

    this.getCarNameInput();
  }

  getCarNameInput() {
    const $input = $('.car-name-input');
    const carNames = $input.value.split(',').map(name => name.trim());
    if (!isValidNameInput(carNames)) {
      $input.value = '';
      return;
    }

    this.racingGame.setCars(carNames.map(carName => new Car(carName)));
    this.view.renderCountInput();
  }

  async handleClickCountBtn({ target: { classList } }) {
    if (!classList.contains('count-btn')) {
      return;
    }

    if (this.racingGame.isEnd) {
      alert(ALERT_RESTART);
      return;
    }

    this.getCountInput();
    if (this.racingGame.count > 0) {
      await this.runGame();
    }
  }

  getCountInput() {
    const $input = $('.count-input');
    if (!isValidCountInput(Number($input.value))) {
      $input.value = '';
      return;
    }

    this.racingGame.setCount(Number($input.value));
  }

  async runGame() {
    this.racingGame.end();
    await this.runRace(this.racingGame.getCount());
  }

  async runRace(count) {
    for (let i = 0; i < count; i++) {
      this.racingGame.runRound();
      this.view.renderProgress(this.racingGame.getCars());
      await delay(1000);
    }

    await this.finishProgress();
  }

  async finishProgress() {
    this.racingGame.finishProgress();
    this.view.renderProgress(this.racingGame.getCars());
    this.view.renderResult(this.racingGame.getWinners());
    await delay(2000);
    this.alertWinners();
  }

  alertWinners() {
    alert(`우승자 ${this.racingGame.getWinners().join(', ')} 축하합니다!`);
  }

  handleClickResetBtn({ target: { classList } }) {
    if (!classList.contains('reset-btn')) {
      return;
    }

    this.racingGame.reset();
    this.view.reset();
  }
}
