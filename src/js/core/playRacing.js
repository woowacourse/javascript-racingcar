import Car from './Car.js';
import { RAMDOM_MIN, RAMDOM_MAX } from '../constants/constant.js';

export const makeCar = carNames => {
  const cars = carNames.map(carName => new Car(carName));
  return cars;
};

export const getWinners = cars => {
  const maxScore = Math.max(...cars.map(car => car.score));
  const winners = cars
    .filter(car => car.score === maxScore)
    .map(car => car.name);

  return winners;
};

const getRandomInt = () => {
  return Math.floor(Math.random() * (RAMDOM_MAX - RAMDOM_MIN)) + RAMDOM_MIN; // 최댓값은 제외, 최솟값은 포함
};

export const playOneTurn = cars => {
  for (const car of cars) {
    car.moveForward(getRandomInt());
  }
};
