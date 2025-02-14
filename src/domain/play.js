import { MAX_MOVABLE_NUMBER } from "../constants/race.js";
import { getMaxPosition } from "../utils/findMax.js";
import { getRandomNumber } from "../utils/random.js";

export const playRound = (cars) => {
  return cars.map((car) =>
    getRandomNumber() >= MAX_MOVABLE_NUMBER
      ? { ...car, position: car.position + 1 }
      : car
  );
};

export const playRacing = (cars, tryCount) => {
  return Array.from({ length: tryCount }).reduce((rounds, _) => {
    const newRound = playRound(rounds[rounds.length - 1] || cars);
    return [...rounds, newRound];
  }, []);
};

export const getWinnersByPosition = (cars) => {
  const maxPosition = getMaxPosition(cars[cars.length - 1]);
  return cars[cars.length - 1].filter((car) => car.position === maxPosition);
};
