import Input from '../view/Input.js';
import Output from '../view/Output.js';
import CarNamesValidator from '../utils/CarNamesValidator.js';
import TryCountValidator from '../utils/TryCountValidator.js';
import Random from '../utils/Random.js';
import Car from '../model/Car.js';

class Game {
  async startGame() {
    const carNamesMap = await this.getCarNames();
    const tryCount = await this.getTryCount();

    for (let i = 0; i < tryCount; i++) {
      this.playRound(carNamesMap);
    }

    Output.winnerResult(this.calculateWinner(carNamesMap));
  }

  async getCarNames() {
    while (true) {
      try {
        const carNames = await Input.inputCarName();
        const carNamesArr = carNames.split(',');

        CarNamesValidator.isValidCount(carNamesArr);
        CarNamesValidator.isDuplicate(carNamesArr);

        const carNamesMap = carNamesArr.map((carName) => {
          return new Car(carName);
        });

        return carNamesMap;
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  async getTryCount() {
    while (true) {
      try {
        const tryCount = await Input.inputTryCount();
        TryCountValidator.isNaturalNumber(Number(tryCount));
        return tryCount;
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  playRound(carNamesMap) {
    this.calculateAdvance(carNamesMap);
    Output.roundResult(carNamesMap);
  }

  calculateAdvance(carNamesMap) {
    carNamesMap.forEach((carName) => {
      const randomNumber = Random.pickNumberZeroToNine();
      carName.updateAdvance(randomNumber);
    });
  }

  calculateWinner(carNamesMap) {
    const maxAdvance = Math.max(...carNamesMap.map((carNames) => carNames.getAdvance()));
    return carNamesMap.filter((carNames) => carNames.getAdvance() === maxAdvance);
  }
}

export default Game;
