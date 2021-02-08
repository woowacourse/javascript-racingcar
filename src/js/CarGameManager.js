import CarGameView from './CarGameView.js';

export default class CarGameManager {
  constructor($element) {
    this.carGameView = new CarGameView($element);
    this.cars = [];
  }

  initGame() {
    this.carGameView.init();
    this.cars = [];
  }
}
