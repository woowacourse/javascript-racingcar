import CarGameView from './CarGameView.js';
import Car from './Game/Car.js';
import RacingCarGame from './Game/RacingCarGame.js';
import Validator from './Validatiors/Validator.js';

export default class CarGameManager {
  constructor($element) {
    this.$element = $element;
    this.carGameView = new CarGameView($element);
    this.validator = new Validator();
    this.initGame();
    this.bindEvents();
  }

  initGame() {
    this.carGameView.init();
    this.cars = [];
    this.carNames = [];
  }

  bindEvents() {
    this.bindInputCarNamesEvent();
    this.bindInputTryCountEvent();
    this.bindResetEvent();
  }

  bindInputCarNamesEvent() {
    this.$element.querySelector('#input-car-names > div > button').addEventListener('click', () => {
      this.carNamesInputHandler();
    });
  }

  bindInputTryCountEvent() {
    this.$element.querySelector('#input-try-count > div > button').addEventListener('click', () => {
      this.tryCountInputHandler();
    });
  }

  bindResetEvent() {
    this.$element.querySelector('#display-game-result > div > button').addEventListener('click', () => {
      this.resetHandler();
    });
  }

  carNamesInputHandler() {
    this.carNames = this.$element.querySelector('#input-car-names > div > input').value
      .split(',')
      .map((name) => name.trim());

    if (!this.validator.validateCarNames(this.carNames)) {
      return this.initGame();
    }
    this.carGameView.showView(this.$element.querySelector('#input-try-count'));
  }

  tryCountInputHandler() {
    const tryCount = Number(this.$element.querySelector('#input-try-count > div > input').value);
    if (!this.validator.validateTryCount(tryCount)) {
      this.carGameView.resetInput(this.$element.querySelector('#input-try-count > div'));
      this.carGameView.hideView(this.$element.querySelector('#display-game-progress'));
      this.carGameView.hideView(this.$element.querySelector('#display-game-result'));
      return;
    }
    this.createCar();
    const racingCarGame = new RacingCarGame(this.cars, tryCount);
    this.carGameView.displayProgress(racingCarGame.getCars());
    this.carGameView.displayWinners(racingCarGame.getWinners());
    this.carGameView.showView(this.$element.querySelector('#display-game-progress'));
    this.carGameView.showView(this.$element.querySelector('#display-game-result'));
  }

  resetHandler() {
    this.initGame();
  }

  createCar() {
    this.cars = this.carNames.map((carName) => new Car(carName));
  }
}
