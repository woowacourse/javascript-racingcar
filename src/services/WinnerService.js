class WinnerService {
  #carList;

  constructor(carList) {
    this.#carList = carList;
  }

  findWinner() {
    const carNames = this.#carList.map(car => car.getName());
    const positions = this.#carList.map(car => car.getPosition());
    const maxPosition = Math.max(...positions);
    return carNames.filter((_, i) => positions[i] === maxPosition);
  }
}

export default WinnerService;
