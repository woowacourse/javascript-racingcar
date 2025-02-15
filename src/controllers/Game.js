import { createRandom } from '../utils/Random.js';
import Car from '../models/Car.js';
import OutputView from '../views/OutputView.js';
import InputController from './InputController.js';

export default class Game {
  #carList;

  constructor() {
    this.#carList = [];
  }

  createCarList(names) {
    this.#carList = names.map(name => new Car(name));
  }

  judgeWinner() {
    const winnerNames = [];
    let maxPosition = 0;
    this.#carList.forEach(car => {
      if (car.position > maxPosition) {
        maxPosition = car.position;
      }
    });

    this.#carList.forEach(car => {
      if (car.position === maxPosition) {
        winnerNames.push(car.name);
      }
    });
    return winnerNames;
  }

  async prepareRace() {
    const inputName = await InputController.inputName();
    const inputTryNumber = await InputController.inputTryNumber();
    this.createCarList(inputName);
    this.inputTryNumber = inputTryNumber;
  }

  startRace() {
    for (let i = 0; i < this.inputTryNumber; i++) {
      this.#carList.forEach(car => {
        const randomValue = createRandom();
        car.moveForward(randomValue);
        OutputView.roundResult(car.name, car.position);
      });
      OutputView.break();
    }
    const winnerNames = this.judgeWinner();
    OutputView.gameResult(winnerNames);
  }

  async start() {
    await this.prepareRace();
    this.startRace();
  }
}
