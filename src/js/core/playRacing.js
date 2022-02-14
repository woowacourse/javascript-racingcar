import Car from './car.js';
import { RAMDOM_MIN, RAMDOM_MAX } from '../constants/constant.js';
import { renderWinners } from '../view/renderResult.js';

export const makeCar = carNames => {
  const cars = carNames.map(carName => new Car(carName));
  return cars;
};

export const getWinners = cars => {
  if (cars.length === 0) {
    window.alert('자동차 이름을 입력해 주세요.');
    return;
  }
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
