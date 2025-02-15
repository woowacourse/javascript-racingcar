import { getRandomNumber } from '../Utils/math.js';
import { MAX, MIN } from '../Constants/rules.js';

const outputView = {
  printGameResult(gameCount, cars) {
    console.log('\n실행 결과');
    for (let count = 0; count < gameCount; count += 1) {
      cars.forEach((car) => {
        const randomNumber = getRandomNumber(
          MAX.RANDOM_NUMBER,
          MIN.RANDOM_NUMBER,
        );
        car.move(randomNumber);
        console.log(`${car.getName()} : ${'-'.repeat(car.getPosition())}`);
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
      .join(', ');
    console.log(`최종 우승자: ${winners}`);
  },
};

export default outputView;
