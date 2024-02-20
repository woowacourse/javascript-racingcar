import Car from "./Car";

class RaceGame {
  #tryCount;
  #cars;

  constructor(carNames, tryCount) {
    this.#tryCount = tryCount;
    this.#cars = carNames.map((name) => new Car(name, tryCount));
  }

  start() {
    Array.from({ length: this.#tryCount }, (_, i) => i).forEach(
      (currentRound) => {
        this.#playOneRound(currentRound);
      }
    );

    return { cars: [...this.#cars], winners: this.#computeWinners() };
  }

  #playOneRound(currentRound) {
    this.#cars.forEach((car) => {
      car.tryMove(currentRound);
    });
  }

  #computeWinners() {
    const maxPosition = this.#getMaxPosition();

    const winners = this.#cars
      .filter((car) => car.getFinalPosition() === maxPosition)
      .map((car) => car.getName());

    return winners;
  }

  #getMaxPosition() {
    return Math.max(...this.#cars.map((car) => car.getFinalPosition()));
  }
}

export default RaceGame;
