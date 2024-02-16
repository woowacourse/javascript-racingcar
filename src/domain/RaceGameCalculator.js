import Car from './Car';

const RaceGameCalculator = {
  /**
   * @param {Car[]} cars Car 클래스의 인스턴스
   * @returns
   */
  getCycleResult: cars => {
    return cars.reduce((cycleResult, car) => {
      cycleResult[car.name] = car.position;
      return cycleResult;
    }, {});
  },

  /**
   * @param {Car[]} cars Car 클래스의 인스턴스
   * @returns
   */
  getWinnersPosition: cars => {
    return cars.reduce((max, car) => {
      if (max <= car.position) return car.position;
      return max;
    }, 0);
  },

  /**
   * @param {Car[]} cars Car 클래스의 인스턴스
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

export default RaceGameCalculator;
