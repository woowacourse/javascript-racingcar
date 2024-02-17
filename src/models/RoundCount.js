import converter from '../utils/converter';
import Validator from './../utils/Validator';

class RoundCount {
  #roundCount;

  #raceResult;

  constructor(count) {
    this.#roundCount = 0;
    this.#raceResult = [];
    this.#validate(count);
    this.#roundCount = Number(count);
  }

  #validate(count) {
    Validator.isValidRoundCountExist(count);
    Validator.isValidRoundCountRule(count);
    Validator.isValidRoundCountRange(count);
  }

  raceStart(cars) {
    const raceResult = Array.from({ length: this.#roundCount }).map(() => cars.roundStart());
    this.#raceResult = raceResult;
  }

  makeRaceResultOutput() {
    const raceResultOutput = this.#raceResult.map((round) => {
      return this.#makeRoundResultOutput(round);
    });

    return raceResultOutput;
  }

  #makeRoundResultOutput(round) {
    const roundResultOutput = round.map((car) => {
      const output = `${car.name} : ${converter.makeDashForNumber(car.score)}`;
      return output;
    });

    return roundResultOutput;
  }

  judgeWinners() {
    const winners = this.#findWinners();
    return `최종 우승자: ${winners.join(', ')}`;
  }

  #findWinners() {
    const lastRound = this.#raceResult[this.#raceResult.length - 1];
    const sortedByScore = lastRound.sort((prevCar, nextCar) => nextCar.score - prevCar.score);
    const maxScore = sortedByScore[0].score;
    const winnerCarNames = sortedByScore
      .filter((car) => car.score === maxScore)
      .map((car) => car.name);
    return winnerCarNames;
  }
}

export default RoundCount;
