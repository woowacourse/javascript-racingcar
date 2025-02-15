import Console from "../utils/Console.js";
import generateRandomNumberBetween0And9 from "../utils/generateRandomNumberBetween0And9.js";
import Output from "../views/Output.js";

class Race {
  #carsInstance = [];
  #tryCount = 0;
  #raceResults = [];

  constructor(carsInstance, tryCount) {
    this.#carsInstance = carsInstance;
    this.#tryCount = tryCount;
  }

  raceStart() {
    for (let i = 1; i <= this.#tryCount; i++) {
      this.#raceResults.push(this.#playRound());
    }
    return this.#raceResults;
  }

  getWinners() {
    const maxCount = this.#getMaxCount();
    const winners = this.#getWinnersCount(maxCount);
    return this.#extractWinnerNames(winners);
  }

  #playRound() {
    this.#carsInstance.forEach((carInstance) => {
      carInstance.move(generateRandomNumberBetween0And9());
    });
    return this.#carsInstance.map((car) => ({
      name: car.name,
      count: car.count,
    }));
  }

  #getMaxCount() {
    const countArray = this.#carsInstance.map((carInstance) => carInstance.count);
    return Math.max(...countArray);
  }

  #getWinnersCount(maxCount) {
    return this.#carsInstance.filter((carInstance) => carInstance.count === maxCount);
  }

  #extractWinnerNames(winnersInstance) {
    return winnersInstance.map((winnerInstance) => winnerInstance.name);
  }
}

export default Race;
