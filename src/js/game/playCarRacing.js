import { GAME } from '../utils/constant.js';

function getRandomNumber() {}

function getRacingResult(car) {
  if (getRandomNumber() >= GAME.MOVING_RANGE) {
    car.distance++;
  }
}

export default function increaseWinnerCount() {
  cars.forEach((car) => getRacingResult(car));
}
