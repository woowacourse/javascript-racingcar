class GameManager {
  #winner;

  constructor(carsStatus) {
    this.#winner = this.findWinner(carsStatus);
  }

  get winner() {
    return this.#winner;
  }

  findWinner(carsStatus) {
    carsStatus = carsStatus.map(({ name, position }) => {
      return { name, position: position.reduce((acc, cur) => acc + cur, 0) };
    });

    const carsPostion = carsStatus.map(({ position }) => position);
    const maxPosition = Math.max(...carsPostion);
    const winner = this.removeLoser(carsStatus, maxPosition);

    return winner;
  }

  removeLoser(carsStatus, maxPosition) {
    return carsStatus
      .filter(({ position }) => position === maxPosition)
      .map(({ name }) => name);
  }
}

module.exports = GameManager;
