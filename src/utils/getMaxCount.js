import Car from "../domains/Car.js";

/**
 * 자동차들의 전진 거리 중 최댓값을 반환한다.
 * @param {Array<Car>} cars
 * @returns {number}
 */
const getMaxCount = (cars) => {
  const countArray = cars.map((car) => car.count);
  return Math.max(...countArray);
};

export default getMaxCount;
