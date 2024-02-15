import { Car } from '../models/index.js';
import { InputController } from './controllers.index.js';

class Game {
  #carList = [];
  #winner = [];
  #round = {
    total: 0,
    current: 0,
  };

  constructor(string) {
    this.#setCarList(string);
    this.#getTotalRound();
    this.#play();
    this.#judgementWinner();
  }

  #setCarList(string) {
    this.#carList = string.split(',').map((name) => new Car(name));
  }

  async #getTotalRound() {
    const value = await InputController.getRoundNumber();

    this.#round.total = Number(value);
  }

  #play() {
    while (this.#round.total < this.#round.current) {
      this.#carList.forEach((car) => car.movement());
    }
  }

  #judgementWinner() {
    const winnerPoint = Math.max(
      this.#carList.map((car) => car.getCarInfo().step),
    );

    this.#carList.forEach((car) => {
      const { step, name } = car.getCarInfo();
      if (step >= winnerPoint) this.#winner.push(name);
    });
  }

  getWinner() {
    return this.#winner;
  }
}

export default Game;
