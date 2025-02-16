import { pipe } from "../utils/pipe.js";

const getMaxCount = (cars) => Math.max(...cars.map((cars) => cars.count));

const findWinners = pipe(
  (cars) => {
    const maxCount = getMaxCount(cars);
    return cars.filter((car) => car.count === maxCount);
  },
  (winners) => winners.map((car) => car.name)
);

export default findWinners;
