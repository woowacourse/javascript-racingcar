import CarGameView from './CarGameView.js';
import Car from './Game/Car.js';
import RacingCarGame from './Game/RacingCarGame.js';
import Validator from './Validators/Validator.js';

export default class CarGameManager {
  constructor($element) {
    this.$element = $element;
    this.carGameView = new CarGameView($element);
    this.validator = new Validator();
    this.initGame();
    this.bindEvents();

    this.winners = "";
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
    this.$element.querySelector('#car-names-check-button')
      .addEventListener('click', this.carNamesInputHandler.bind(this));
  }

  bindInputTryCountEvent() {
    this.$element.querySelector('#try-count-check-button')
      .addEventListener('click', this.tryCountInputHandler.bind(this));
  }

  bindResetEvent() {
    this.$element.querySelector('#reset-button')
      .addEventListener('click', () => this.initGame());
  }

  carNamesInputHandler() {
    this.carNames = this.carGameView.getCarNames();
    const errorMessage = this.validator.validateCarNames(this.carNames);

    if (errorMessage) {
      this.carGameView.alertError(errorMessage);
      this.initGame();
      return;
    }

    this.carGameView.displayTryCountView();
  }

  tryCountInputHandler() {
    const tryCount = this.carGameView.getTryCount();
    const errorMessage = this.validator.validateTryCount(tryCount);

    if (errorMessage) {
      this.carGameView.alertError(errorMessage);
      this.carGameView.resetTryCountView();
      return;
    }

    this.createCar();

    // TODO : 리팩토링 필요함
    // setTimeout, setInterval, bind 좀 처리하자
    const racingCarGame = new RacingCarGame(this.cars, tryCount);
    this.carGameView.displayProgress(this.cars);
    setTimeout(() => {
      const playByInterval = setInterval(racingCarGame.playOneRound.bind(racingCarGame), 1000);
      const progress = setInterval(this.carGameView
        .displayProgress.bind(this.carGameView), 1000, racingCarGame.getCars());
      setTimeout(clearInterval, racingCarGame.tryCount * 1000, playByInterval);
      setTimeout(clearInterval, racingCarGame.tryCount * 1000, progress);
      setTimeout(this.carGameView
        .hideSpinner
        .bind(this.carGameView), racingCarGame.tryCount * 1000 + 1000);
      setTimeout(() => {
        const winners = racingCarGame.getWinners(racingCarGame.cars);
        this.carGameView.displayWinners.bind(this.carGameView)(winners);
      }, racingCarGame.tryCount * 1000 + 1000);
      setTimeout(alert, racingCarGame.tryCount * 1000 + 3000, '축하합니다');
    }, 1000);
  }

  setWinners(cars) {
    this.winners = new RacingCarGame().getWinners(cars);
  }

  createCar() {
    this.cars = this.carNames.map((carName) => new Car(carName));
  }
}
