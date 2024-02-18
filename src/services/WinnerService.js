class WinnerService {
  #carNames;
  #positions;

  constructor(carNames, positions) {
    this.#carNames = carNames;
    this.#positions = positions;
  }

  findWinner() {
    const maxPosition = Math.max(...this.#positions);
    return this.#carNames.filter((_, i) => this.#positions[i] === maxPosition);
  }
}

export default WinnerService;
