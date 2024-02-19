import Car from './Car';

const RaceCalculator = {
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
      return max <= car.position ? car.position : max;
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

export default RaceCalculator;
