import { MOVE_NUMBER } from '../constants.js';

const parseCarNames = names => names.split(',').map(name => name.trim());

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min)) + min;

const moveCar = car => {
  const canMove =
    generateRandomNumber(MOVE_NUMBER.MAX, MOVE_NUMBER.MIN) >=
    MOVE_NUMBER.AT_LEAST;
  if (canMove) car.move();
  return canMove;
};

const getCarsMovement = cars => {
  const carInformations = new Map();
  cars.forEach(car => {
    const isMoved = moveCar(car);
    carInformations.set(car.getName(), isMoved);
  });
  return carInformations;
};

const getMaxCount = cars => Math.max(...cars.map(car => car.getRacingCount()));

const getWinners = cars => {
  const maxCount = getMaxCount(cars);
  return cars.filter(car => car.getRacingCount() === maxCount);
};

export { parseCarNames, getCarsMovement, getWinners };
