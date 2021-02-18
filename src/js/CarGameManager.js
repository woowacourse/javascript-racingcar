import CarGameView from './CarGameView.js';
import Car from './Game/Car.js';
import RacingCarGame from './Game/RacingCarGame.js';
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
    document.querySelector('#input-car-names > div > button').addEventListener('click', () => {
      this.carNamesInputHandler();
    });
  }

  bindInputTryCountEvent() {
    document.querySelector('#input-try-count > div > button').addEventListener('click', () => {
      this.tryCountInputHandler();
    });
  }

  bindResetEvent() {
    document.querySelector('#display-game-result > div > button').addEventListener('click', () => {
      this.resetHandler();
    });
  }

  carNamesInputHandler() {
    this.carNames = document
      .querySelector('#input-car-names > div > input')
      .value.split(',')
      .map((name) => name.trim());

    this.errorMessage = this.racingCarValidator.checkCarNamesValidation(this.carNames);
    if (this.errorMessage) {
      alert(this.errorMessage);
      this.initGame();
      return;
    }

    this.carGameView.showView(document.querySelector('#input-try-count'));
  }

  tryCountInputHandler() {
    const tryCount = Number(document.querySelector('#input-try-count > div > input').value);

    this.errorMessage = this.racingCarValidator.checkTryCountValidation(tryCount);
    if (this.errorMessage) {
      alert(this.errorMessage);
      this.carGameView.resetInput(document.querySelector('#input-try-count > div'));
      this.carGameView.hideView(document.querySelector('#display-game-progress'));
      this.carGameView.hideView(document.querySelector('#display-game-result'));

      return;
    }

    this.createCar();
    const racingCarGame = new RacingCarGame(this.cars, tryCount);
    racingCarGame.playGame();
    this.carGameView.renderGameProgress(racingCarGame.getCars());
    this.carGameView.renderWinners(racingCarGame.getWinners());
    this.carGameView.showView(document.querySelector('#display-game-progress'));
    this.carGameView.showView(document.querySelector('#display-game-result'));
  }

  resetHandler() {
    this.initGame();
  }

  createCar() {
    this.cars = this.carNames.map((carName) => new Car(carName));
  }
}
