import Car from "../domains/Car.js";
import getMaxCount from "./getMaxCount.js";

/**
 * 전진 거리가 가장 큰 자동차 경주 최종 우승자를 반환한다.
 * @param {Array<Car>} cars
 * @returns {Array<string>}
 */
const getWinners = (cars) => {
  const maxCount = getMaxCount(cars);
  const winners = cars.filter((car) => car.count === maxCount);
  return winners.map((winner) => winner.name);
};
export default getWinners;
