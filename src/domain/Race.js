import RaceSetup from './RaceSetup.js';
import randomNumber from './random.js';
import OutputView from '../view/Output.js';
import Winners from './Winners.js';
import { MIN } from '../constant/constant.js';

class Race {
  async play() {
    const raceSetup = new RaceSetup();
    await raceSetup.carList();
    await raceSetup.raceCount();
    this.start(raceSetup.getCarList(), raceSetup.getRaceCount());
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
