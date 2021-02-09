import CarGameView from './CarGameView.js';
import Car from './Car.js';

export default class CarGameManager {
  constructor($element) {
    this.$element = $element;
    this.carGameView = new CarGameView($element);
    this.cars = [];
    this.carNames = '';
    this.bindInputCarNamesEvent();
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

  carNamesInputHandler() {
    this.carGameView.showView(document.querySelector('#input-try-count'));
    this.carNames = document.querySelector('#input-car-names > div > input').value.split(',');
    this.createCar();
  }

  createCar() {
    this.carNames.map((name) => this.cars.push(new Car(name)));
    console.log(this.cars);
  }
}
