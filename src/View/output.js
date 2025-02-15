import { getRandomNumber } from '../Utils/math.js';
import { MAX, MIN } from '../Constants/rules.js';
import { RACE } from '../Constants/message.js';

const outputView = {
  printGameResult(gameCount, cars) {
    console.log(`\n${RACE.RESULT_INSTRUCTION}`);
    for (let count = 0; count < gameCount; count += 1) {
      cars.forEach((car) => {
        const randomNumber = getRandomNumber(
          MAX.RANDOM_NUMBER,
          MIN.RANDOM_NUMBER,
        );
        car.move(randomNumber);
        console.log(
          `${car.getName()} : ${RACE.MOVEMENT.repeat(car.getPosition())}`,
        );
      });
      console.log('');
    }
  },
  printWinners(cars) {
    const carPositions = cars.map((car) => car.getPosition());
    const winnerPosition = Math.max(...carPositions);
    const winners = cars
      .filter((car) => car.getPosition() === winnerPosition)
      .map((car) => car.getName())
      .join(RACE.WINNER_DELIMITER);
    console.log(`${RACE.WINNER_INSTRUCTION} ${winners}`);
  },
};

export default outputView;
