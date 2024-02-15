import Car from '../domain/Car';

const RaceController = {
  /**
   * @param {Car[]} cars
   * @returns
   */
  getCycleResult: cars => {
    return cars.reduce((cycleResult, car) => {
      cycleResult[car.name] = car.position;
      return cycleResult;
    }, {});
  },

  /**
   * @param {Car[]} cars
   * @returns
   */
  getWinnersPosition: cars => {
    return cars.reduce((max, car) => {
      if (max <= car.position) return car.position;
      return max;
    }, 0);
  },

  /**
   * @param {Car[]} cars
   * @returns
   */
  getWinners: (cars, winnersPosition) => {
    return cars
      .filter(car => {
        return car.position === winnersPosition;
      })
      .map(winner => winner.name);
  },
};

export default RaceController;
