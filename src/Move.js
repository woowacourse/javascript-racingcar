class Move {
  #carName;
  #moveCount;

  constructor(carName) {
    this.#carName = carName;
    this.#moveCount = 0;
  }
  move() {
    if (this.#randomNum() >= 4) {
      this.#moveCount++;
    }
  }

  #randomNum() {
    return Math.floor(Math.random() * 10);
  }

  getInfo() {
    return {
      carName: this.#carName,
      moveCount: this.#moveCount,
    };
  }
}

export default Move;
