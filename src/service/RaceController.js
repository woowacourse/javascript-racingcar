const RaceController = {
  getCycleResult: cars => {
    return cars.reduce((cycleResult, car) => {
      cycleResult[car.name] = car.position;
      return cycleResult;
    }, {});
  },

  getWinnersPosition: cars => {
    return cars.reduce((max, car) => {
      if (max <= car.position) return car.position;
      return max;
    }, 0);
  },

  getWinners: (cars, winnersPosition) => {
    return cars
      .filter(car => {
        return car.position === winnersPosition;
      })
      .map(winner => winner.name);
  },
};

export default RaceController;
