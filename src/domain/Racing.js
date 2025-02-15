class Racing {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  raceTurn(carsMoveList) {
    this.#cars.forEach((car, carIndex) => {
      const isMove = carsMoveList[carIndex];
      if (isMove) {
        car.move();
      }
    });
  }

  runRace(totalRaceMoves) {
    return totalRaceMoves.map((carsMoveList) => {
      this.raceTurn(carsMoveList);

      const result = this.#cars.map((car) => car.getCarInfo());
      return result;
    });
  }

  decideWinner() {
    const results = this.#cars.map((car) => car.getCarInfo());
    const positions = results.map((result) => result.position);
    const maxPosition = Math.max(...positions);
    return results.filter((result) => result.position === maxPosition);
  }
}

export default Racing;
