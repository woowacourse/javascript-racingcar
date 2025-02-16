import RaceSetup from './RaceSetup.js';
import Winners from './Winners.js';
import randomNumber from '../utils/random.js';
import OutputView from '../view/Output.js';
import { MIN } from '../constant/constant.js';

class Race {
  async play() {
    const initializeRace = new RaceSetup();
    await initializeRace.carList();
    await initializeRace.raceCount();
    this.start(initializeRace.getCarList(), initializeRace.getRaceCount());
  }

  start(carList, raceCount) {
    OutputView.printBeforeResult();
    for (let i = 0; i < raceCount; i++) {
      this.progressRace(carList);
      console.log('');
    }

    this.printWinners(carList);
  }

  progressRace(carList) {
    carList.forEach((car) => {
      const moveCondition = randomNumber();
      if (moveCondition >= MIN.MOVE_CONDITION) {
        car.moveForward();
      }

      OutputView.printRoundResult(car.getName(), car.getPosition());
    });
  }

  printWinners(carList) {
    const winners = new Winners();
    winners.determine(carList);
    OutputView.printWinners(winners.getNames());
  }
}

export default Race;
