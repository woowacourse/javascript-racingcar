import Car from '../component/car.js';
import { RAMDOM_MIN, RAMDOM_MAX } from '../constants/constant.js';
import { renderWinners } from '../view/renderResult.js';

export const makeCars = carNames => {
  const cars = carNames.map(carName => new Car(carName));
  return cars;
};

export const getWinners = cars => {
  const maxScore = Math.max(...cars.map(car => car.score));
  const winners = cars
    .filter(car => car.score === maxScore)
    .map(car => car.name);
  renderWinners(winners);
};

export const playOneTurn = cars => {
  for (let car of cars) {
    car.isAdvance(getRandomInt());
  }
};

const getRandomInt = () => {
  return Math.floor(Math.random() * (RAMDOM_MAX - RAMDOM_MIN)) + RAMDOM_MIN; //최댓값은 제외, 최솟값은 포함
};
