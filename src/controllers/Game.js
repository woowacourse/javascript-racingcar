import { Car } from '../models/index.js';
import { getRandomNumber } from '../utils/index.js';
import InputController from './InputController.js';

class Game {
  #carList = [];
  #winner = [];
  #round = 0;
  #randomNumberArray = [];

  constructor(string, numbers = undefined) {
    this.#setCarList(string);
    this.#round = round;
    this.#getRound();
    this.#setRandomNumberArray(numbers);
    this.#play();
    this.#judgementWinner();
  }
  getCar() {
    return this.#carList.map((car) => car.getCarInfo());
  }
  #setCarList(string) {
    this.#carList = string.split(',').map((name) => new Car(name, 0));
  }

  async #getRound() {
    const value = await InputController.getRoundNumber();

    this.#round = Number(value);
  }

  // numbers : 테스트 코드 시 이중 배열로 숫자
  #setRandomNumberArray(numbers) {
    this.#randomNumberArray =
      numbers ||
      Array.from(Array(this.#round), () =>
        Array.from({ length: this.#carList.length }, () => getRandomNumber()),
      );
  }

  #play() {
    this.#randomNumberArray.forEach((numbers) => {
      numbers.forEach((number, index) => {
        const { name, step } = this.#carList[index].getCarInfo();
        this.#carList[index] = new Car(name, step, number);
      });
    });
  }

  #judgementWinner() {
    const winnerPoint = Math.max(
      this.#carList.map((car) => car.getCarInfo().step),
    );

    this.#winner = this.#carList
      .filter((car) => car.getCarInfo().step === winnerPoint)
      .map((car) => car.getCarInfo().name);
  }

  getWinner() {
    return this.#winner;
  }
}

export default Game;
