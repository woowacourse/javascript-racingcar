import { Car } from '../domain/index.js';
import {OutputView} from '../view/index.js';
import {InputController} from './index.js';
import { OUTPUT_MESSAGE } from '../constants/index.js';

class Game {
  #carList = [];

  #winner = [];

  #round = {
    total: 0,
    current: 1,
  };

  async #setCarList() {
    const value = await InputController.getCarName();

    if (value) {
      const nameArray = value.split(',');
      this.#carList = nameArray.map((name) => new Car(name));

      OutputView.printMessage(`[input check] 참가 자동차: ${nameArray.join(',')}`);
    }
  }

  async #getTotalRound() {
    const value = await InputController.getRoundNumber();

    this.#round.total = Number(value);

    OutputView.printMessage(
      `[input check] 게임을 진행할 라운드 횟수: ${this.#round.total}`,
    );
  }

  async setGame() {
    await this.#setCarList();
    await this.#getTotalRound();
  }

  #printRoundResult() {
    this.#carList.forEach((car) => {
      const { name, step } = car.getCarInfo();
      const message = `${name} : ${'-'.repeat(step)} `;

      OutputView.printMessage(message);
    });
  }

  #printGameplayMessage() {
    OutputView.printMessage(
      `\n${OUTPUT_MESSAGE.roundResult}`,
    );
  }

  #printRoundMessage() {
    OutputView.printMessage(
      `\n[${this.#round.current}라운드]`,
    );
  }

  play() {
    this.#printGameplayMessage();
    while (this.#round.total >= this.#round.current) {
      this.#printRoundMessage();

      this.#carList.forEach((car) => car.movement());
      this.#printRoundResult();
      this.#round.current += 1;
    }
  }

  #getWinnerPoint() {
    return Math.max(...this.#carList.map((car) => car.getCarInfo().step));
  }

  #judgementWinner() {
    const winnerPoint = this.#getWinnerPoint();

    if (winnerPoint)
      this.#carList.forEach((car) => {
        const { step, name } = car.getCarInfo();

        if (step === winnerPoint) this.#winner.push(name);
      });
  }

  #printWinner() {
    const winners = this.#winner.join(', ');
    const message = `\n${OUTPUT_MESSAGE.winner}: ${winners || '없음'}`;

    OutputView.printMessage(message);
  }

  getGameResult() {
    this.#judgementWinner();
    this.#printWinner();
  }
}

export default Game;