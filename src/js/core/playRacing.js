import Car from './car.js';
import { RAMDOM_MIN, RAMDOM_MAX } from '../constants/constant.js';
import { renderResult, renderWinners } from '../view/renderResult.js';

export const makeCar = (carNames, tryCount) => {
  const cars = carNames.map(carName => new Car(carName));
  for (let i = 0; i < tryCount; i++) {
    playOneTurn(cars);
    renderResult(cars);
  }
  renderWinners(cars);
};

const playOneTurn = cars => {
  for (let car of cars) {
    car.isAdvance(getRandomInt());
  }
};

const getRandomInt = () => {
  return Math.floor(Math.random() * (RAMDOM_MAX - RAMDOM_MIN)) + RAMDOM_MIN; //최댓값은 제외, 최솟값은 포함
};
