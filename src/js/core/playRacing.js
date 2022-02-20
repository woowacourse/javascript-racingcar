import Car from './Car.js';
import { RAMDOM_MIN, RAMDOM_MAX } from '../constants/constant.js';

const getWinners = cars => {
  const maxScore = Math.max(...cars.map(car => car.score));
  const winners = cars
    .filter(car => car.score === maxScore)
    .map(car => car.name);

  return { winners, maxScore };
};

const getRandomInt = () => {
  return Math.floor(Math.random() * (RAMDOM_MAX - RAMDOM_MIN)) + RAMDOM_MIN; // 최댓값은 제외, 최솟값은 포함
};

const playTurnScoreResult = cars => {
  for (const car of cars) {
    car.tryMoveForward(getRandomInt());
  }
};

export const gamePlay = ({ carNames, tryCount }) => {
  const cars = carNames.map(carName => new Car(carName));

  for (let i = 0; i < tryCount; i++) {
    playTurnScoreResult(cars);
  }

  return {
    cars,
    ...getWinners(cars),
  };
};
