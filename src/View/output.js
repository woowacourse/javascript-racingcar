import { RACE } from '../Constants/message.js';

const outputView = {
  printRaceResult(raceResult) {
    console.log(`\n${RACE.RESULT_INSTRUCTION}`);
    raceResult.forEach((round) => {
      round.forEach(({ name, position }) => {
        console.log(`${name} : ${RACE.MOVEMENT.repeat(position)}`);
      });
      console.log('');
    });
  },
  printWinners(winners) {
    console.log(
      `${RACE.WINNER_INSTRUCTION} ${winners.join(RACE.WINNER_DELIMITER)}`,
    );
  },
};

export default outputView;
