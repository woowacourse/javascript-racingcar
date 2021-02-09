import CarGameView from './CarGameView.js';
import Car from './Car.js';

export default class CarGameManager {
  constructor($element) {
    this.$element = $element;
    this.carGameView = new CarGameView($element);
    this.cars = [];
    this.carNames = '';
    this.bindInputCarNamesEvent();
    this.bindInputTryCountEvent();
    this.bindResetEvent();
  }

  initGame() {
    this.carGameView.init();
    this.cars = [];
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
    this.carGameView.showView(document.querySelector('#input-try-count'));
    this.carNames = document.querySelector('#input-car-names > div > input').value.split(',');
    this.createCar();
  }

  tryCountInputHandler() {
    const tryCount = Number(document.querySelector('#input-try-count > div > input').value);
    this.playGame(tryCount);
    this.carGameView.showView(document.querySelector('#display-game-progress'));
    this.carGameView.showView(document.querySelector('#display-game-result'));
  }

  resetHandler() {
    this.initGame();
  }

  createCar() {
    this.carNames.map((name) => this.cars.push(new Car(name)));
    console.log(this.cars);
  }

  playGame(tryCount) {
    // TODO : 게임 진행
  }
}
