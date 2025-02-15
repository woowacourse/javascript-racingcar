import { RACE } from '../Constants/message.js';

const outputView = {
  printRaceResult(raceResult) {
    console.log(`\n${RACE.RESULT_INSTRUCTION}`);
    console.log(raceResult);
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
