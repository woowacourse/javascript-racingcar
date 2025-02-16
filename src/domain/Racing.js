class Racing {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  #raceTurn(isMoveList) {
    this.#cars.forEach((car, carIndex) => {
      const isMove = isMoveList[carIndex];
      if (isMove) {
        car.move();
      }
    });
  }

  runRace(totalRaceMoves) {
    return totalRaceMoves.map((isMoveList) => {
      this.#raceTurn(isMoveList);

      const result = this.#cars.map((car) => car.getCarInfo());
      return result;
    });
  }

  static decideWinner(results) {
    const positions = results.map((result) => result.position);
    const maxPosition = Math.max(...positions);
    return results.filter((result) => result.position === maxPosition);
  }
}

export default Racing;
