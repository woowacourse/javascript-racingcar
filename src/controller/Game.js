import { DELIMITER } from '../constant/rule.js';
import { Car, Referee } from '../domain/index.js';
import InputController from './InputController.js';
import OutputController from './OutputController.js';

class Game {
  #carList = [];

  #round; // Round 클래스 사용

  async #setCarList() {
    const value = await InputController.getCarName();
    const nameArray = value.split(DELIMITER);

    OutputController.printParticipantList(nameArray);

    this.#carList = nameArray.map((name) => new Car(name));
  }

  async #setTotalRound() {
    this.#round = await InputController.getRoundNumber();

    OutputController.printTotalRound(this.#round.getData().totalRound);
  }

  async setGame() {
    await this.#setCarList();
    await this.#setTotalRound();
  }

  #announceGameResult() {
    const winnerList = new Referee(this.#carList).getWinnerList();

    OutputController.printWinner(winnerList);
  }

  play() {
    OutputController.printRoundResultHeader();

    while (!this.#round.isEnd()) {
      OutputController.printCurrentRound(this.#round.getData().currentRound);

      this.#carList.forEach((car) => {
        car.move();

        const { name, step } = car.getCarInfo();
        OutputController.printMovement(name, step);
      });

      this.#round.moveToNextRound();
    }

    this.#announceGameResult();
  }
}

export default Game;
