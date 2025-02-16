class Winner {
  static findWinners(cars) {
    const winnerPosition = cars.reduce(
      (maxPosition, car) => Math.max(car.position, maxPosition),
      0,
    );
    const winnerList = cars
      .filter(car => car.position === winnerPosition)
      .map(car => car.name);

    const winnerOutput = winnerList.join(', ');
    return winnerOutput;
  }
}

export default Winner;
