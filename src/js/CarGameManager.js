import CarGameView from './CarGameView.js';
import Car from './Game/Car.js';
import RacingCarGame from './Game/RacingCarGame.js';
import { $ } from './Utils/dom.js';
import RacingCarValidator from './Validators/RacingCarValidator.js';

export default class CarGameManager {
  constructor() {
    this.carGameView = new CarGameView();
    this.racingCarValidator = new RacingCarValidator();
    this.bindEvents();
  }

  initGame() {
    this.carGameView.init();
    this.cars = [];
    this.carNames = [];
    this.errorMessage = '';
  }

  bindEvents() {
    this.bindInputCarNamesEvent();
    this.bindInputTryCountEvent();
    this.bindResetEvent();
  }

  bindInputCarNamesEvent() {
    $('#input-names-btn').addEventListener('click', () => {
      this.carNamesInputHandler();
    });
  }

  bindInputTryCountEvent() {
    $('#input-count-btn').addEventListener('click', () => {
      this.tryCountInputHandler();
    });
  }

  bindResetEvent() {
    $('#reset-btn').addEventListener('click', () => {
      this.resetHandler();
    });
  }

  carNamesInputHandler() {
    this.carNames = $('#input-car-names')
      .value.split(',')
      .map((name) => name.trim());

    this.errorMessage = this.racingCarValidator.checkCarNamesValidation(this.carNames);
    if (this.errorMessage) {
      alert(this.errorMessage);
      this.initGame();
      return;
    }

    this.carGameView.showView($('#input-count-wrapper'));
  }

  tryCountInputHandler() {
    const tryCount = Number($('#input-try-count').value);

    this.errorMessage = this.racingCarValidator.checkTryCountValidation(tryCount);
    if (this.errorMessage) {
      alert(this.errorMessage);
      this.carGameView.resetInput($('#input-count-wrapper > div'));
      this.carGameView.hideView($('#display-game-progress'));
      this.carGameView.hideView($('#display-game-result'));

      return;
    }

    this.createCar();
    const racingCarGame = new RacingCarGame(this.cars, tryCount);
    racingCarGame.playGame();
    this.carGameView.renderGameProgress(racingCarGame.getCars());
    this.carGameView.renderWinners(racingCarGame.getWinners());
    this.carGameView.showView($('#display-game-progress'));
    this.carGameView.showView($('#display-game-result'));
  }

  resetHandler() {
    this.initGame();
  }

  createCar() {
    this.cars = this.carNames.map((carName) => new Car(carName));
  }
}
